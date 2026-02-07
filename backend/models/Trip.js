const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  destinationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  },
  budget: {
    type: Number,
    required: true
  },
  days: {
    type: Number,
    required: true
  },
  interests: [{
    type: String
  }],
  travelers: {
    type: Number,
    default: 1
  },
  itinerary: [{
    day: Number,
    title: String,
    activities: [{
      time: String,
      activity: String,
      location: String,
      estimatedCost: Number,
      duration: String
    }],
    meals: [{
      type: String,
      suggestion: String,
      estimatedCost: Number
    }],
    accommodation: {
      name: String,
      type: String,
      estimatedCost: Number
    },
    totalDayCost: Number
  }],
  hotels: [{
    name: String,
    location: String,
    pricePerNight: Number,
    rating: Number,
    affiliateLink: String
  }],
  flights: [{
    from: String,
    to: String,
    date: Date,
    estimatedPrice: Number,
    affiliateLink: String
  }],
  transportation: [{
    type: String,
    from: String,
    to: String,
    estimatedCost: Number
  }],
  totalEstimatedCost: Number,
  aiGeneratedBy: {
    type: String,
    enum: ['openai', 'gemini'],
    default: 'openai'
  },
  status: {
    type: String,
    enum: ['draft', 'saved', 'in-progress', 'completed', 'cancelled'],
    default: 'draft'
  },
  startDate: Date,
  endDate: Date,
  notes: String,
  isPublic: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for user trips
tripSchema.index({ userId: 1, createdAt: -1 });
tripSchema.index({ destination: 1 });

module.exports = mongoose.model('Trip', tripSchema);
