const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  country: {
    type: String,
    required: true
  },
  state: String,
  city: String,
  category: [{
    type: String,
    enum: ['beach', 'mountain', 'city', 'heritage', 'adventure', 'religious', 'wildlife', 'hill-station']
  }],
  description: {
    type: String,
    required: true
  },
  shortDescription: String,
  images: [{
    url: String,
    caption: String
  }],
  coverImage: String,
  coordinates: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  },
  weather: {
    bestTimeToVisit: String,
    avgTemperature: {
      summer: String,
      winter: String,
      monsoon: String
    },
    climate: String
  },
  thingsToDo: [{
    title: String,
    description: String,
    estimatedCost: Number
  }],
  safetyRating: {
    type: Number,
    min: 1,
    max: 5,
    default: 3
  },
  safetyTips: [String],
  popularityScore: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  isPromoted: {
    type: Boolean,
    default: false
  },
  promotedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Business'
  },
  promotionExpiry: Date,
  tags: [String],
  nearbyPlaces: [{
    name: String,
    type: String,
    distance: Number,
    coordinates: {
      lat: Number,
      lng: Number
    }
  }],
  averageCost: {
    budget: Number,
    moderate: Number,
    luxury: Number
  },
  idealDuration: {
    min: Number,
    max: Number
  },
  languages: [String],
  currency: String,
  isActive: {
    type: Boolean,
    default: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

// Indexes for better search performance
destinationSchema.index({ name: 'text', description: 'text', tags: 'text' });
destinationSchema.index({ coordinates: '2dsphere' });
destinationSchema.index({ popularityScore: -1 });
destinationSchema.index({ slug: 1 });

// Increment view count
destinationSchema.methods.incrementViews = function() {
  this.views += 1;
  this.popularityScore += 0.1;
  return this.save();
};

module.exports = mongoose.model('Destination', destinationSchema);
