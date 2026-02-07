# 🌍 Travel & Tourism Mobile App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Flutter](https://img.shields.io/badge/Flutter-3.16+-blue.svg)](https://flutter.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green.svg)](https://www.mongodb.com/cloud/atlas)

A modern, feature-rich travel and tourism mobile application for Indian and international travelers with AI-powered trip planning, booking integration, and multiple monetization streams.

**🌐 Live Demo**: [https://rahul700raj.github.io/travel-tourism-app/](https://rahul700raj.github.io/travel-tourism-app/)

---

## 📱 Screenshots & Demo

> Add screenshots here after building the app

---

## ✨ Key Features

### 🎯 Core Features
- 🔐 **Multi-Auth System**: Email, Google OAuth, Mobile OTP
- 🗺️ **Destination Explorer**: 300+ destinations (India + International)
- 🤖 **AI Trip Planner**: Personalized itineraries using OpenAI GPT-4
- 🏨 **Booking Integration**: Hotels, Flights, Buses, Trains
- 👨‍🏫 **Local Guides**: Book verified local guides
- 📹 **Travel Reels**: Instagram-style short videos
- 🗺️ **Smart Maps**: Google Maps integration for nearby places
- 🌤️ **Weather & Safety**: Real-time weather, best time to visit
- ❤️ **Wishlist**: Save favorite destinations
- 🌐 **Multi-language**: Hindi + English support

### 💰 Monetization Features
- 💸 **Affiliate Commission**: 2-8% on bookings (Flights, Hotels, Cabs)
- 📱 **Ad Integration**: Google AdMob (Banner, Interstitial, Native)
- 👑 **Premium Subscription**: ₹199/month or ₹999/year
- 🏢 **Business Listings**: Featured placement for local businesses
- 📦 **Travel Packages**: 10-15% commission on package bookings

**💵 Estimated Monthly Revenue**: ₹1,90,000 - ₹6,50,000

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Flutter / React Native
- **State Management**: Provider / Redux
- **UI Components**: Material Design / Custom
- **Maps**: Google Maps API
- **Video**: Video Player plugins
- **Ads**: Google AdMob

### Backend
- **Runtime**: Node.js 18+ with Express
- **Database**: MongoDB Atlas
- **Authentication**: Firebase Auth + JWT
- **AI Integration**: OpenAI GPT-4 / Google Gemini
- **Payment**: Razorpay / Stripe
- **Cloud Storage**: Firebase Storage / AWS S3
- **Email**: Nodemailer
- **SMS**: Twilio

### APIs & Services
- Google Maps API (Places, Directions, Geocoding)
- OpenWeatherMap API
- MakeMyTrip Affiliate API
- Booking.com Affiliate API
- Uber/Ola API
- Google AdMob
- Razorpay Payment Gateway
- Firebase Cloud Messaging

### DevOps
- **Hosting**: Railway (Backend), GitHub Pages (Landing)
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, Google Analytics
- **Version Control**: Git + GitHub

---

## 📊 Revenue Model Breakdown

| Revenue Stream | Monthly Estimate | Commission/Rate |
|---------------|------------------|-----------------|
| **Affiliate Commission** | ₹50,000 - ₹2,00,000 | 2-8% per booking |
| **Advertisements** | ₹30,000 - ₹1,00,000 | CPM/CPC based |
| **Premium Subscription** | ₹20,000 - ₹80,000 | ₹199/month |
| **Business Listings** | ₹50,000 - ₹1,50,000 | ₹2,999-₹4,999/month |
| **Travel Packages** | ₹40,000 - ₹1,20,000 | 10-15% commission |
| **TOTAL** | **₹1,90,000 - ₹6,50,000** | - |

📈 **Growth Projection**: ₹6,50,000/month by Month 12

---

## 📱 App Screens (40+ Screens)

### Authentication (5 screens)
- Splash Screen
- Onboarding Slides
- Login/Signup
- OTP Verification
- Language Selection

### Home & Discovery (8 screens)
- Home Dashboard
- Explore Destinations
- Destination Details
- Search & Filter
- Travel Reels Feed
- Reel Detail View
- Map View
- Nearby Places

### AI Trip Planner (4 screens)
- Trip Input Form
- AI Generated Itinerary
- Edit Itinerary
- Saved Trips

### Booking (8 screens)
- Flight Search/Results
- Hotel Search/Results
- Bus/Train Search/Results
- Local Guide Listing
- Guide Profile & Booking

### Profile (6 screens)
- User Profile
- My Trips
- Wishlist
- Booking History
- Settings
- Premium Subscription

### Admin Panel (10 screens)
- Dashboard
- User Management
- Destination Management
- Listings Approval
- Analytics & Earnings
- Ad Management
- Content Moderation

---

## 🗄️ Database Schema

### MongoDB Collections

```javascript
// Users Collection
{
  _id, email, phone, name, profilePicture,
  authProvider, isPremium, premiumExpiry,
  language, wishlist[], createdAt
}

// Destinations Collection
{
  _id, name, slug, country, state, category[],
  description, images[], coordinates: {lat, lng},
  weather, thingsToDo[], safetyRating,
  popularityScore, isPromoted
}

// Trips Collection (AI Generated)
{
  _id, userId, destination, budget, days,
  interests[], itinerary[], hotels[], flights[],
  totalEstimatedCost, status
}

// Reels Collection
{
  _id, userId, videoUrl, thumbnail,
  destination, caption, likes, views
}

// Bookings Collection
{
  _id, userId, type, affiliatePartner,
  bookingData, commission, status
}
```

[View Complete Schema →](docs/PROJECT_STRUCTURE.md)

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/verify-otp
POST   /api/auth/google-login
```

### Destinations
```
GET    /api/destinations
GET    /api/destinations/:id
GET    /api/destinations/search?q=goa
GET    /api/destinations/nearby?lat=19&lng=72
```

### AI Trip Planner
```
POST   /api/trip-planner/generate
GET    /api/trip-planner/my-trips
POST   /api/trip-planner/save
PUT    /api/trip-planner/:id
```

### Bookings
```
POST   /api/bookings/flights/search
POST   /api/bookings/hotels/search
POST   /api/bookings/track-click
POST   /api/bookings/track-conversion
```

### Premium
```
GET    /api/premium/plans
POST   /api/premium/subscribe
POST   /api/premium/verify-payment
```

[View Complete API Documentation →](docs/API_DOCUMENTATION.md)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MongoDB Atlas account
- Flutter SDK 3.16+ (for mobile app)
- Firebase account
- OpenAI API key
- Google Maps API key
- Razorpay account

### Backend Setup

```bash
# Clone repository
git clone https://github.com/rahul700raj/travel-tourism-app.git
cd travel-tourism-app/backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your API keys

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup (Flutter)

```bash
cd frontend

# Install dependencies
flutter pub get

# Run on emulator/device
flutter run

# Build for production
flutter build apk --release  # Android
flutter build ios --release  # iOS
```

### Admin Panel Setup

```bash
cd admin-panel

# Install dependencies
npm install

# Start development server
npm start
```

Admin panel will run on `http://localhost:3000`

---

## 🔑 Environment Variables

### Backend (.env)
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/travel-tourism
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_api_key
GOOGLE_MAPS_API_KEY=your_google_maps_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
```

[View Complete Environment Variables →](backend/.env.example)

---

## 📚 Documentation

- 📖 [API Documentation](docs/API_DOCUMENTATION.md) - Complete API reference
- 💰 [Monetization Strategy](docs/MONETIZATION.md) - Revenue model details
- 📁 [Project Structure](docs/PROJECT_STRUCTURE.md) - Code organization
- 🚀 [Deployment Guide](docs/DEPLOYMENT.md) - Production deployment

---

## 🗓️ MVP Roadmap (12 Weeks)

### Phase 1: Foundation (Weeks 1-3) ✅
- [x] Project setup (Flutter/React Native + Node.js)
- [x] Database design & setup
- [x] Authentication system (Email, Google, OTP)
- [x] Basic UI/UX design system
- [x] Home screen & navigation

### Phase 2: Core Features (Weeks 4-6) 🚧
- [ ] Destinations listing & details
- [ ] Search & filter functionality
- [ ] Map integration (Google Maps)
- [ ] Weather API integration
- [ ] Wishlist functionality

### Phase 3: Booking & AI (Weeks 7-9) 📅
- [ ] Affiliate integration (MakeMyTrip, Booking.com)
- [ ] AI Trip Planner (OpenAI/Gemini)
- [ ] Local guides listing
- [ ] Travel reels upload & feed
- [ ] Click tracking system

### Phase 4: Monetization & Polish (Weeks 10-12) 📅
- [ ] Premium subscription (Razorpay)
- [ ] Google AdMob integration
- [ ] Admin panel
- [ ] Multi-language support
- [ ] Testing & bug fixes
- [ ] App store deployment

---

## 🎨 Design System

### Color Palette
```css
Primary:    #FF6B35  /* Vibrant Orange */
Secondary:  #004E89  /* Deep Blue */
Accent:     #F7B801  /* Golden Yellow */
Background: #F8F9FA  /* Light Gray */
Text:       #212529  /* Dark Gray */
Success:    #28A745
Error:      #DC3545
```

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular)
- **Captions**: Inter (Light)

### UI Components
- Destination Cards: Instagram-style with gradient overlays
- Reels Feed: TikTok-style vertical scroll
- Search Bar: Floating with rounded corners
- Bottom Navigation: 5 tabs (Home, Explore, Reels, Trips, Profile)

---

## 🚀 Deployment

### Backend (Railway)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
cd backend
railway init
railway up
```

### Frontend (App Stores)
```bash
# Android
flutter build appbundle --release

# iOS
flutter build ios --release
```

### Landing Page (GitHub Pages)
Already deployed! ✅
- **URL**: https://rahul700raj.github.io/travel-tourism-app/

[View Deployment Guide →](docs/DEPLOYMENT.md)

---

## 📊 Project Stats

- **Total Screens**: 40+
- **API Endpoints**: 50+
- **Database Collections**: 10
- **Supported Languages**: 2 (Hindi, English)
- **Target Platforms**: Android, iOS, Web
- **Estimated Development Time**: 12 weeks
- **Team Size**: 1-3 developers

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Developer

**Rahul Mishra**
- 📧 Email: rm2778643@gmail.com
- 🐙 GitHub: [@rahul700raj](https://github.com/rahul700raj)
- 💼 LinkedIn: [Connect with me](#)

---

## 🙏 Acknowledgments

- OpenAI for AI integration
- Google Maps for location services
- Firebase for backend infrastructure
- Flutter/React Native community
- MongoDB Atlas for database hosting
- Railway for backend deployment

---

## 📞 Support

- 📧 Email: rm2778643@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/rahul700raj/travel-tourism-app/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/rahul700raj/travel-tourism-app/discussions)

---

## 🌟 Star History

If you find this project helpful, please consider giving it a ⭐!

---

## 📈 Roadmap

### Version 1.0 (Current)
- ✅ Core features
- ✅ AI trip planner
- ✅ Booking integration
- ✅ Basic monetization

### Version 2.0 (Future)
- [ ] Social features (follow, share)
- [ ] Group trip planning
- [ ] Live chat with guides
- [ ] AR navigation
- [ ] Offline mode
- [ ] Multi-currency support
- [ ] More languages

---

**⭐ Star this repo if you find it helpful!**

**🔗 Links**:
- 🌐 [Live Demo](https://rahul700raj.github.io/travel-tourism-app/)
- 📖 [Documentation](docs/)
- 🐙 [GitHub Repository](https://github.com/rahul700raj/travel-tourism-app)

---

<div align="center">
  <p>Made with ❤️ by Rahul Mishra</p>
  <p>© 2024 Travel & Tourism App. All rights reserved.</p>
</div>
