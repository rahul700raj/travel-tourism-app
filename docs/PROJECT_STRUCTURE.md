# 📁 Project Structure - Travel & Tourism App

## Complete Directory Structure

```
travel-tourism-app/
│
├── backend/                          # Node.js Backend
│   ├── config/
│   │   ├── db.js                    # MongoDB connection
│   │   ├── firebase.js              # Firebase admin config
│   │   └── razorpay.js              # Payment gateway config
│   │
│   ├── models/
│   │   ├── User.js                  # User schema
│   │   ├── Destination.js           # Destination schema
│   │   ├── Trip.js                  # AI-generated trip schema
│   │   ├── Reel.js                  # Travel reels schema
│   │   ├── Booking.js               # Booking tracking schema
│   │   ├── Guide.js                 # Local guide schema
│   │   ├── AffiliateClick.js        # Commission tracking
│   │   ├── Subscription.js          # Premium subscription
│   │   └── Business.js              # Business listing schema
│   │
│   ├── routes/
│   │   ├── auth.js                  # Authentication routes
│   │   ├── users.js                 # User management
│   │   ├── destinations.js          # Destination CRUD
│   │   ├── tripPlanner.js           # AI trip planner
│   │   ├── bookings.js              # Booking & affiliate
│   │   ├── guides.js                # Local guides
│   │   ├── reels.js                 # Travel reels
│   │   ├── premium.js               # Subscription
│   │   ├── admin.js                 # Admin panel
│   │   └── payments.js              # Payment processing
│   │
│   ├── middleware/
│   │   ├── auth.js                  # JWT authentication
│   │   ├── premium.js               # Premium check
│   │   ├── admin.js                 # Admin authorization
│   │   ├── upload.js                # File upload (multer)
│   │   ├── rateLimit.js             # Rate limiting
│   │   └── errorHandler.js          # Error handling
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── destinationController.js
│   │   ├── tripController.js
│   │   ├── bookingController.js
│   │   ├── guideController.js
│   │   ├── reelController.js
│   │   ├── premiumController.js
│   │   └── adminController.js
│   │
│   ├── services/
│   │   ├── openai.service.js        # AI trip generation
│   │   ├── affiliate.service.js     # Affiliate link generation
│   │   ├── payment.service.js       # Razorpay integration
│   │   ├── email.service.js         # Email notifications
│   │   ├── sms.service.js           # OTP via Twilio
│   │   ├── maps.service.js          # Google Maps API
│   │   └── weather.service.js       # Weather API
│   │
│   ├── utils/
│   │   ├── generateToken.js         # JWT token generation
│   │   ├── sendEmail.js             # Email utility
│   │   ├── sendSMS.js               # SMS utility
│   │   ├── uploadToS3.js            # AWS S3 upload
│   │   └── validators.js            # Input validation
│   │
│   ├── tests/
│   │   ├── auth.test.js
│   │   ├── destinations.test.js
│   │   └── tripPlanner.test.js
│   │
│   ├── .env.example                 # Environment variables template
│   ├── .gitignore
│   ├── package.json
│   ├── server.js                    # Entry point
│   └── README.md
│
├── frontend/                         # Flutter/React Native App
│   ├── lib/                         # Flutter source (if using Flutter)
│   │   ├── main.dart
│   │   ├── config/
│   │   │   ├── routes.dart
│   │   │   ├── theme.dart
│   │   │   └── constants.dart
│   │   │
│   │   ├── models/
│   │   │   ├── user_model.dart
│   │   │   ├── destination_model.dart
│   │   │   ├── trip_model.dart
│   │   │   └── reel_model.dart
│   │   │
│   │   ├── providers/               # State management
│   │   │   ├── auth_provider.dart
│   │   │   ├── destination_provider.dart
│   │   │   ├── trip_provider.dart
│   │   │   └── theme_provider.dart
│   │   │
│   │   ├── screens/
│   │   │   ├── auth/
│   │   │   │   ├── splash_screen.dart
│   │   │   │   ├── onboarding_screen.dart
│   │   │   │   ├── login_screen.dart
│   │   │   │   ├── signup_screen.dart
│   │   │   │   └── otp_screen.dart
│   │   │   │
│   │   │   ├── home/
│   │   │   │   ├── home_screen.dart
│   │   │   │   ├── explore_screen.dart
│   │   │   │   └── search_screen.dart
│   │   │   │
│   │   │   ├── destinations/
│   │   │   │   ├── destination_list.dart
│   │   │   │   ├── destination_detail.dart
│   │   │   │   └── map_view.dart
│   │   │   │
│   │   │   ├── trip_planner/
│   │   │   │   ├── trip_input.dart
│   │   │   │   ├── ai_itinerary.dart
│   │   │   │   ├── edit_trip.dart
│   │   │   │   └── my_trips.dart
│   │   │   │
│   │   │   ├── bookings/
│   │   │   │   ├── flight_search.dart
│   │   │   │   ├── hotel_search.dart
│   │   │   │   └── booking_history.dart
│   │   │   │
│   │   │   ├── reels/
│   │   │   │   ├── reels_feed.dart
│   │   │   │   ├── reel_detail.dart
│   │   │   │   └── upload_reel.dart
│   │   │   │
│   │   │   ├── guides/
│   │   │   │   ├── guide_list.dart
│   │   │   │   ├── guide_detail.dart
│   │   │   │   └── book_guide.dart
│   │   │   │
│   │   │   ├── profile/
│   │   │   │   ├── profile_screen.dart
│   │   │   │   ├── wishlist.dart
│   │   │   │   ├── settings.dart
│   │   │   │   └── premium_screen.dart
│   │   │   │
│   │   │   └── admin/
│   │   │       ├── admin_dashboard.dart
│   │   │       ├── user_management.dart
│   │   │       └── analytics.dart
│   │   │
│   │   ├── widgets/
│   │   │   ├── destination_card.dart
│   │   │   ├── trip_card.dart
│   │   │   ├── reel_player.dart
│   │   │   ├── custom_button.dart
│   │   │   ├── loading_indicator.dart
│   │   │   └── error_widget.dart
│   │   │
│   │   ├── services/
│   │   │   ├── api_service.dart
│   │   │   ├── auth_service.dart
│   │   │   ├── storage_service.dart
│   │   │   ├── location_service.dart
│   │   │   └── notification_service.dart
│   │   │
│   │   └── utils/
│   │       ├── validators.dart
│   │       ├── helpers.dart
│   │       └── constants.dart
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── android/                     # Android specific
│   ├── ios/                         # iOS specific
│   ├── web/                         # Web specific
│   ├── pubspec.yaml                 # Flutter dependencies
│   └── README.md
│
├── admin-panel/                      # React Admin Dashboard
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── UserManagement.jsx
│   │   │   ├── DestinationManager.jsx
│   │   │   ├── Analytics.jsx
│   │   │   └── RevenueReport.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   │
│   │   ├── App.jsx
│   │   └── index.js
│   │
│   ├── public/
│   ├── package.json
│   └── README.md
│
├── docs/                             # Documentation
│   ├── API_DOCUMENTATION.md
│   ├── MONETIZATION.md
│   ├── PROJECT_STRUCTURE.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── scripts/                          # Utility scripts
│   ├── seed-destinations.js         # Seed database
│   ├── migrate.js                   # Database migrations
│   └── backup.js                    # Backup script
│
├── .github/
│   └── workflows/
│       ├── backend-deploy.yml       # CI/CD for backend
│       └── frontend-deploy.yml      # CI/CD for frontend
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## Key Files Explained

### Backend

#### `server.js`
Main entry point for the Express server. Sets up middleware, routes, and database connection.

#### `models/User.js`
User schema with authentication, premium status, and wishlist functionality.

#### `routes/tripPlanner.js`
AI-powered trip planning routes using OpenAI GPT-4.

#### `middleware/auth.js`
JWT authentication middleware for protected routes.

#### `services/openai.service.js`
OpenAI API integration for generating personalized itineraries.

#### `services/affiliate.service.js`
Generates affiliate links and tracks commissions.

---

### Frontend (Flutter)

#### `lib/main.dart`
App entry point with theme, routes, and providers setup.

#### `lib/screens/trip_planner/ai_itinerary.dart`
Displays AI-generated trip itinerary with day-by-day breakdown.

#### `lib/screens/reels/reels_feed.dart`
Instagram-style vertical scrolling video feed.

#### `lib/services/api_service.dart`
HTTP client for API communication with backend.

#### `lib/providers/auth_provider.dart`
State management for authentication using Provider pattern.

---

### Admin Panel (React)

#### `src/components/Dashboard.jsx`
Admin dashboard with key metrics, charts, and analytics.

#### `src/components/RevenueReport.jsx`
Revenue tracking and breakdown by source.

---

## Database Collections

### MongoDB Collections

1. **users** - User accounts and profiles
2. **destinations** - Travel destinations
3. **trips** - AI-generated itineraries
4. **reels** - User-uploaded videos
5. **bookings** - Booking tracking
6. **guides** - Local guide profiles
7. **affiliate_clicks** - Commission tracking
8. **subscriptions** - Premium subscriptions
9. **businesses** - Business listings
10. **reviews** - User reviews

---

## Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb://...
JWT_SECRET=...
OPENAI_API_KEY=...
RAZORPAY_KEY_ID=...
GOOGLE_MAPS_API_KEY=...
```

### Frontend
```env
API_BASE_URL=https://api.travelapp.com
GOOGLE_MAPS_API_KEY=...
RAZORPAY_KEY_ID=...
ADMOB_APP_ID=...
```

---

## API Endpoints Summary

### Authentication
- POST `/api/auth/signup`
- POST `/api/auth/login`
- POST `/api/auth/verify-otp`

### Destinations
- GET `/api/destinations`
- GET `/api/destinations/:id`
- GET `/api/destinations/search`

### Trip Planner
- POST `/api/trip-planner/generate`
- GET `/api/trip-planner/my-trips`

### Bookings
- POST `/api/bookings/flights/search`
- POST `/api/bookings/hotels/search`

### Premium
- GET `/api/premium/plans`
- POST `/api/premium/subscribe`

---

## Deployment Structure

### Production Architecture
```
┌─────────────────┐
│   Mobile App    │
│ (Flutter/RN)    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Load Balancer │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌────────┐
│ API 1  │ │ API 2  │
│(Railway)│(Railway)│
└───┬────┘ └───┬────┘
    │          │
    └────┬─────┘
         ▼
┌─────────────────┐
│    MongoDB      │
│   (Atlas)       │
└─────────────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌────────┐
│Firebase│ │  AWS   │
│Storage │ │   S3   │
└────────┘ └────────┘
```

---

## Development Workflow

### 1. Setup
```bash
# Clone repository
git clone https://github.com/rahul700raj/travel-tourism-app.git

# Backend setup
cd backend
npm install
cp .env.example .env
npm run dev

# Frontend setup
cd frontend
flutter pub get
flutter run
```

### 2. Development
- Backend runs on `http://localhost:5000`
- Frontend runs on emulator/device
- Admin panel on `http://localhost:3000`

### 3. Testing
```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
flutter test
```

### 4. Deployment
```bash
# Backend to Railway
railway up

# Frontend to App Stores
flutter build apk --release
flutter build ios --release
```

---

## File Naming Conventions

### Backend
- **Models**: PascalCase (User.js, Destination.js)
- **Routes**: camelCase (tripPlanner.js, bookings.js)
- **Controllers**: camelCase with Controller suffix
- **Services**: camelCase with .service.js suffix

### Frontend (Flutter)
- **Screens**: snake_case with _screen suffix
- **Widgets**: snake_case
- **Models**: snake_case with _model suffix
- **Providers**: snake_case with _provider suffix

---

## Code Organization Best Practices

1. **Separation of Concerns**: Models, routes, controllers, services
2. **DRY Principle**: Reusable utilities and helpers
3. **Error Handling**: Centralized error handler
4. **Validation**: Input validation at route level
5. **Security**: JWT auth, rate limiting, helmet
6. **Testing**: Unit tests for critical functions
7. **Documentation**: JSDoc comments for functions
8. **Version Control**: Meaningful commit messages

---

## Next Steps

1. ✅ Clone the repository
2. ✅ Set up environment variables
3. ✅ Install dependencies
4. ✅ Run development servers
5. ✅ Test API endpoints
6. ✅ Build mobile app
7. ✅ Deploy to production

---

**Repository**: https://github.com/rahul700raj/travel-tourism-app
**Documentation**: https://rahul700raj.github.io/travel-tourism-app/
**Contact**: rm2778643@gmail.com
