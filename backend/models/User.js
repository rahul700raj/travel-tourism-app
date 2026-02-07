const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    sparse: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    unique: true,
    sparse: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    select: false
  },
  profilePicture: {
    type: String,
    default: 'https://via.placeholder.com/150'
  },
  authProvider: {
    type: String,
    enum: ['email', 'google', 'phone'],
    required: true
  },
  googleId: String,
  isPremium: {
    type: Boolean,
    default: false
  },
  premiumExpiry: Date,
  language: {
    type: String,
    enum: ['en', 'hi'],
    default: 'en'
  },
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination'
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  lastLogin: Date,
  deviceTokens: [String], // For push notifications
  preferences: {
    notifications: {
      type: Boolean,
      default: true
    },
    newsletter: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  if (this.password) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Check if premium is active
userSchema.methods.isPremiumActive = function() {
  return this.isPremium && this.premiumExpiry && this.premiumExpiry > new Date();
};

module.exports = mongoose.model('User', userSchema);
