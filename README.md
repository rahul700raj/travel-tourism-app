# 🌍 Travel & Tourism Mobile App

A modern, feature-rich travel and tourism mobile application for Indian and international travelers with AI-powered trip planning, booking integration, and multiple monetization streams.

## 🚀 Features

### Core Features
- 🔐 **Multi-Auth System**: Email, Google, Mobile OTP
- 🗺️ **Destination Explorer**: India + International destinations
- 🤖 **AI Trip Planner**: Budget-based, personalized itineraries
- 🏨 **Booking Integration**: Hotels, Flights, Buses, Trains
- 👨‍🏫 **Local Guides**: Book verified local guides
- 📹 **Travel Reels**: Instagram-style short videos
- 🗺️ **Map Integration**: Nearby places, restaurants, attractions
- 🌤️ **Weather & Safety**: Real-time weather, best time to visit
- ❤️ **Wishlist**: Save favorite destinations
- 🌐 **Multi-language**: Hindi + English support

### Monetization Features
- 💰 **Affiliate Commission**: Flights, Hotels, Cabs (2-8% commission)
- 📱 **Ad Integration**: Google AdMob (Banner, Interstitial, Native)
- 👑 **Premium Subscription**: ₹199/month or ₹999/year
- 🏢 **Business Listings**: Featured placement for local businesses
- 📦 **Travel Packages**: Commission-based package bookings

**Estimated Monthly Revenue**: ₹1,90,000 - ₹6,50,000

## 🛠️ Tech Stack

### Frontend
- **Framework**: Flutter / React Native
- **State Management**: Provider / Redux
- **UI Components**: Material Design / Custom
- **Maps**: Google Maps API
- **Video**: Video Player plugins

### Backend
- **Runtime**: Node.js + Express
- **Database**: MongoDB / Firebase Firestore
- **Authentication**: Firebase Auth
- **AI Integration**: OpenAI GPT-4 / Google Gemini
- **Payment**: Razorpay / Stripe
- **Cloud Storage**: Firebase Storage / AWS S3

### APIs & Services
- Google Maps API
- OpenWeatherMap API
- MakeMyTrip Affiliate API
- Booking.com Affiliate API
- Uber/Ola API
- Google AdMob
- Razorpay Payment Gateway

## 📱 Screens (40+ Screens)

### Authentication (5)
- Splash Screen
- Onboarding
- Login/Signup
- OTP Verification
- Language Selection

### Home & Discovery (8)
- Home Dashboard
- Explore Destinations
- Destination Details
- Search & Filter
- Travel Reels Feed
- Reel Detail
- Map View
- Nearby Places

### AI Trip Planner (4)
- Trip Input Form
- AI Generated Itinerary
- Edit Itinerary
- Saved Trips

### Booking (8)
- Flight Search/Results
- Hotel Search/Results
- Bus/Train Search/Results
- Local Guide Listing
- Guide Profile

### Profile (6)
- User Profile
- My Trips
- Wishlist
- Booking History
- Settings
- Premium Subscription

### Admin Panel (10)
- Dashboard
- User Management
- Destination Management
- Listings Approval
- Analytics
- Earnings Report
- Ad Management
- Content Moderation

## 🗄️ Database Schema

### Collections
- **users**: User profiles, auth, premium status
- **destinations**: Places, coordinates, weather, safety
- **trips**: AI-generated itineraries
- **reels**: User-uploaded travel videos
- **bookings**: Affiliate booking tracking
- **guides**: Local guide profiles
- **affiliate_clicks**: Commission tracking
- **subscriptions**: Premium user data
- **business_listings**: Promoted businesses

## 🔌 API Endpoints

### Authentication
```
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/verify-otp
POST /api/auth/google-login
```

### Destinations
```
GET  /api/destinations
GET  /api/destinations/:id
GET  /api/destinations/search
GET  /api/destinations/nearby
```

### AI Trip Planner
```
POST /api/trip-planner/generate
GET  /api/trip-planner/my-trips
POST /api/trip-planner/save
```

### Bookings
```
POST /api/bookings/flights/search
POST /api/bookings/hotels/search
POST /api/bookings/track-click
POST /api/bookings/track-conversion
```

### Premium
```
GET  /api/premium/plans
POST /api/premium/subscribe
POST /api/premium/verify-payment
```

## 💰 Revenue Model

### 1. Affiliate Commission (₹50K - ₹2L/month)
- Flights: 2-5% per booking
- Hotels: 4-8% per booking
- Cabs: ₹20-50 per ride
- Buses: 2-3% per ticket

### 2. Advertisements (₹30K - ₹1L/month)
- Banner Ads: ₹0.10-0.50 per impression
- Interstitial Ads: ₹2-5 per click
- Native Ads: ₹1-3 per click

### 3. Premium Subscription (₹20K - ₹80K/month)
- Monthly: ₹199
- Yearly: ₹999
- Features: Ad-free, offline maps, unlimited AI plans

### 4. Business Listings (₹50K - ₹1.5L/month)
- Featured Listing: ₹2,999/month
- Top Placement: ₹4,999/month

### 5. Travel Packages (₹40K - ₹1.2L/month)
- Commission: 10-15% per package

## 🚀 MVP Roadmap (12 Weeks)

### Phase 1: Foundation (Weeks 1-3)
- Project setup
- Authentication system
- Basic UI/UX
- Database design

### Phase 2: Core Features (Weeks 4-6)
- Destinations listing
- Search & filter
- Map integration
- Weather API

### Phase 3: Booking & AI (Weeks 7-9)
- Affiliate integration
- AI Trip Planner
- Local guides
- Travel reels

### Phase 4: Monetization (Weeks 10-12)
- Premium subscription
- AdMob integration
- Admin panel
- Testing & deployment

## 📦 Installation

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Add your API keys
npm run dev
```

### Frontend Setup
```bash
cd frontend
flutter pub get
# or
npm install
npm start
```

## 🔑 Environment Variables

```env
# Backend
MONGODB_URI=your_mongodb_uri
FIREBASE_CONFIG=your_firebase_config
OPENAI_API_KEY=your_openai_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
GOOGLE_MAPS_API_KEY=your_maps_key

# Frontend
GOOGLE_MAPS_API_KEY=your_maps_key
RAZORPAY_KEY_ID=your_razorpay_key
ADMOB_APP_ID=your_admob_id
```

## 📊 Admin Panel

Access at: `/admin`

Features:
- User analytics
- Revenue tracking
- Destination management
- Content moderation
- Earnings report

## 🎨 Design System

### Colors
- Primary: #FF6B35 (Orange)
- Secondary: #004E89 (Blue)
- Accent: #F7B801 (Yellow)
- Background: #F8F9FA

### Typography
- Headings: Poppins Bold
- Body: Inter Regular
- Captions: Inter Light

## 📱 App Store Links

- **Android**: [Google Play Store](#)
- **iOS**: [Apple App Store](#)
- **Web**: [Live Demo](#)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines.

## 📄 License

MIT License - see LICENSE file for details

## 👨‍💻 Developer

**Rahul Mishra**
- Email: rm2778643@gmail.com
- GitHub: [@rahul700raj](https://github.com/rahul700raj)

## 🙏 Acknowledgments

- OpenAI for AI integration
- Google Maps for location services
- Firebase for backend infrastructure
- Flutter/React Native community

---

**⭐ Star this repo if you find it helpful!**

**📧 Contact**: rm2778643@gmail.com
**🌐 Website**: [Coming Soon]
**📱 Download**: [Coming Soon]
