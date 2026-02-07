const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
const Trip = require('../models/Trip');
const { protect } = require('../middleware/auth');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Generate AI Trip Plan
router.post('/generate', protect, async (req, res) => {
  try {
    const { destination, budget, days, interests, travelers = 1 } = req.body;

    // Validate input
    if (!destination || !budget || !days) {
      return res.status(400).json({
        success: false,
        message: 'Please provide destination, budget, and days'
      });
    }

    // Create AI prompt
    const prompt = `Create a detailed ${days}-day travel itinerary for ${destination} with the following details:
    
Budget: ₹${budget} (total for ${travelers} traveler(s))
Interests: ${interests ? interests.join(', ') : 'general sightseeing'}

Please provide:
1. Day-by-day itinerary with specific activities, timings, and locations
2. Estimated costs for each activity
3. Meal suggestions with approximate costs
4. Accommodation recommendations with price ranges
5. Transportation suggestions between places
6. Total estimated cost breakdown

Format the response as a structured JSON with the following schema:
{
  "itinerary": [
    {
      "day": 1,
      "title": "Day title",
      "activities": [
        {
          "time": "09:00 AM",
          "activity": "Activity name",
          "location": "Location name",
          "estimatedCost": 500,
          "duration": "2 hours"
        }
      ],
      "meals": [
        {
          "type": "breakfast",
          "suggestion": "Restaurant/dish name",
          "estimatedCost": 200
        }
      ],
      "accommodation": {
        "name": "Hotel name",
        "type": "budget/moderate/luxury",
        "estimatedCost": 2000
      },
      "totalDayCost": 3500
    }
  ],
  "hotels": [
    {
      "name": "Hotel name",
      "location": "Area",
      "pricePerNight": 2000,
      "rating": 4.5
    }
  ],
  "transportation": [
    {
      "type": "cab/bus/train",
      "from": "Location A",
      "to": "Location B",
      "estimatedCost": 500
    }
  ],
  "totalEstimatedCost": 25000
}`;

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional travel planner specializing in Indian and international destinations. Provide detailed, realistic, and budget-conscious travel itineraries."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 3000
    });

    // Parse AI response
    let aiResponse = completion.choices[0].message.content;
    
    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = aiResponse.match(/```json\n([\s\S]*?)\n```/) || 
                      aiResponse.match(/```\n([\s\S]*?)\n```/);
    
    if (jsonMatch) {
      aiResponse = jsonMatch[1];
    }

    const tripData = JSON.parse(aiResponse);

    // Save trip to database
    const trip = await Trip.create({
      userId: req.user._id,
      destination,
      budget,
      days,
      interests,
      travelers,
      itinerary: tripData.itinerary,
      hotels: tripData.hotels,
      transportation: tripData.transportation,
      totalEstimatedCost: tripData.totalEstimatedCost,
      aiGeneratedBy: 'openai',
      status: 'draft'
    });

    res.status(201).json({
      success: true,
      message: 'Trip itinerary generated successfully',
      data: trip
    });

  } catch (error) {
    console.error('Trip generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate trip itinerary',
      error: error.message
    });
  }
});

// Get user's trips
router.get('/my-trips', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    
    const query = { userId: req.user._id };
    if (status) query.status = status;

    const trips = await Trip.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const count = await Trip.countDocuments(query);

    res.json({
      success: true,
      data: trips,
      pagination: {
        total: count,
        page: parseInt(page),
        pages: Math.ceil(count / limit)
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch trips',
      error: error.message
    });
  }
});

// Get single trip
router.get('/:id', protect, async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found'
      });
    }

    // Check if user owns the trip or trip is public
    if (trip.userId.toString() !== req.user._id.toString() && !trip.isPublic) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Increment views
    trip.views += 1;
    await trip.save();

    res.json({
      success: true,
      data: trip
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to fetch trip',
      error: error.message
    });
  }
});

// Update trip
router.put('/:id', protect, async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found'
      });
    }

    // Check ownership
    if (trip.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    // Update trip
    const updatedTrip = await Trip.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Trip updated successfully',
      data: updatedTrip
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update trip',
      error: error.message
    });
  }
});

// Delete trip
router.delete('/:id', protect, async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found'
      });
    }

    // Check ownership
    if (trip.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    await trip.deleteOne();

    res.json({
      success: true,
      message: 'Trip deleted successfully'
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete trip',
      error: error.message
    });
  }
});

// Save trip (change status from draft to saved)
router.post('/:id/save', protect, async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: 'Trip not found'
      });
    }

    if (trip.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: 'Access denied'
      });
    }

    trip.status = 'saved';
    await trip.save();

    res.json({
      success: true,
      message: 'Trip saved successfully',
      data: trip
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to save trip',
      error: error.message
    });
  }
});

module.exports = router;
