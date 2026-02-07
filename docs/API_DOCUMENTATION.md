# 🔌 API Documentation - Travel & Tourism App

Base URL: `https://api.travelapp.com/api`

---

## Authentication

All protected routes require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

---

## 1. Authentication APIs

### Register User
```http
POST /auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "authProvider": "email"
}

Response: 201 Created
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

### Google Login
```http
POST /auth/google-login
Content-Type: application/json

{
  "idToken": "google_id_token"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

### Send OTP
```http
POST /auth/send-otp
Content-Type: application/json

{
  "phone": "+919876543210"
}

Response: 200 OK
{
  "success": true,
  "message": "OTP sent successfully",
  "data": {
    "otpId": "otp_id_here"
  }
}
```

### Verify OTP
```http
POST /auth/verify-otp
Content-Type: application/json

{
  "phone": "+919876543210",
  "otp": "123456",
  "otpId": "otp_id_here"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "user": { ... },
    "token": "jwt_token_here"
  }
}
```

---

## 2. User APIs

### Get Profile
```http
GET /users/profile
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "isPremium": false,
    "wishlist": []
  }
}
```

### Update Profile
```http
PUT /users/profile
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "John Updated",
  "language": "hi"
}

Response: 200 OK
{
  "success": true,
  "message": "Profile updated successfully",
  "data": { ... }
}
```

### Get Wishlist
```http
GET /users/wishlist
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "_id": "dest_id",
      "name": "Goa",
      "images": [],
      "rating": 4.5
    }
  ]
}
```

### Add to Wishlist
```http
POST /users/wishlist/:destinationId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Added to wishlist"
}
```

### Remove from Wishlist
```http
DELETE /users/wishlist/:destinationId
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Removed from wishlist"
}
```

---

## 3. Destinations APIs

### Get All Destinations
```http
GET /destinations?page=1&limit=20&category=beach&country=India

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "_id": "dest_id",
      "name": "Goa",
      "slug": "goa",
      "country": "India",
      "category": ["beach"],
      "images": [],
      "coordinates": {
        "lat": 15.2993,
        "lng": 74.1240
      },
      "popularityScore": 95
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "pages": 5
  }
}
```

### Get Destination Details
```http
GET /destinations/:id

Response: 200 OK
{
  "success": true,
  "data": {
    "_id": "dest_id",
    "name": "Goa",
    "description": "...",
    "weather": {
      "bestTimeToVisit": "November to February",
      "avgTemperature": { ... }
    },
    "thingsToDo": [],
    "safetyRating": 4,
    "safetyTips": [],
    "nearbyPlaces": []
  }
}
```

### Search Destinations
```http
GET /destinations/search?q=beach&country=India

Response: 200 OK
{
  "success": true,
  "data": [ ... ],
  "count": 15
}
```

### Get Nearby Destinations
```http
GET /destinations/nearby?lat=19.0760&lng=72.8777&radius=100

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "destination": { ... },
      "distance": 45.5 // in km
    }
  ]
}
```

---

## 4. AI Trip Planner APIs

### Generate Trip Itinerary
```http
POST /trip-planner/generate
Authorization: Bearer <token>
Content-Type: application/json

{
  "destination": "Goa",
  "budget": 25000,
  "days": 5,
  "interests": ["beach", "nightlife", "adventure"],
  "travelers": 2
}

Response: 201 Created
{
  "success": true,
  "message": "Trip itinerary generated successfully",
  "data": {
    "_id": "trip_id",
    "destination": "Goa",
    "budget": 25000,
    "days": 5,
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival and Beach Exploration",
        "activities": [
          {
            "time": "10:00 AM",
            "activity": "Check-in at hotel",
            "location": "Calangute",
            "estimatedCost": 0,
            "duration": "1 hour"
          }
        ],
        "meals": [],
        "totalDayCost": 3500
      }
    ],
    "totalEstimatedCost": 24500
  }
}
```

### Get My Trips
```http
GET /trip-planner/my-trips?status=saved&page=1&limit=10
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": [ ... ],
  "pagination": {
    "total": 15,
    "page": 1,
    "pages": 2
  }
}
```

### Get Single Trip
```http
GET /trip-planner/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

### Update Trip
```http
PUT /trip-planner/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "status": "in-progress",
  "notes": "Updated itinerary"
}

Response: 200 OK
{
  "success": true,
  "message": "Trip updated successfully",
  "data": { ... }
}
```

### Delete Trip
```http
DELETE /trip-planner/:id
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Trip deleted successfully"
}
```

### Save Trip
```http
POST /trip-planner/:id/save
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Trip saved successfully",
  "data": { ... }
}
```

---

## 5. Booking APIs

### Search Flights
```http
POST /bookings/flights/search
Authorization: Bearer <token>
Content-Type: application/json

{
  "from": "Mumbai",
  "to": "Goa",
  "date": "2024-03-15",
  "passengers": 2
}

Response: 200 OK
{
  "success": true,
  "data": {
    "affiliateUrl": "https://makemytrip.com/...",
    "clickId": "click_id_here"
  }
}
```

### Search Hotels
```http
POST /bookings/hotels/search
Authorization: Bearer <token>
Content-Type: application/json

{
  "destination": "Goa",
  "checkIn": "2024-03-15",
  "checkOut": "2024-03-20",
  "guests": 2
}

Response: 200 OK
{
  "success": true,
  "data": {
    "affiliateUrl": "https://booking.com/...",
    "clickId": "click_id_here"
  }
}
```

### Track Affiliate Click
```http
POST /bookings/track-click
Authorization: Bearer <token>
Content-Type: application/json

{
  "affiliateType": "makemytrip",
  "bookingType": "flight",
  "bookingData": { ... }
}

Response: 200 OK
{
  "success": true,
  "data": {
    "clickId": "click_id_here",
    "affiliateUrl": "https://..."
  }
}
```

### Track Conversion
```http
POST /bookings/track-conversion
Authorization: Bearer <token>
Content-Type: application/json

{
  "clickId": "click_id_here",
  "bookingAmount": 15000,
  "commission": 750
}

Response: 200 OK
{
  "success": true,
  "message": "Conversion tracked successfully"
}
```

---

## 6. Local Guides APIs

### Get Guides
```http
GET /guides?destination=goa&page=1&limit=10

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "_id": "guide_id",
      "name": "Rajesh Kumar",
      "destination": { ... },
      "languages": ["English", "Hindi"],
      "rating": 4.8,
      "pricePerDay": 2000,
      "isVerified": true
    }
  ]
}
```

### Get Guide Details
```http
GET /guides/:id

Response: 200 OK
{
  "success": true,
  "data": {
    "_id": "guide_id",
    "name": "Rajesh Kumar",
    "bio": "...",
    "experience": 5,
    "specializations": [],
    "reviews": []
  }
}
```

### Book Guide
```http
POST /guides/book
Authorization: Bearer <token>
Content-Type: application/json

{
  "guideId": "guide_id",
  "date": "2024-03-15",
  "days": 3
}

Response: 201 Created
{
  "success": true,
  "message": "Guide booking request sent",
  "data": { ... }
}
```

---

## 7. Reels APIs

### Get Reels Feed
```http
GET /reels?page=1&limit=20

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "_id": "reel_id",
      "userId": { ... },
      "videoUrl": "https://...",
      "thumbnail": "https://...",
      "destination": { ... },
      "caption": "Amazing sunset at Goa!",
      "likes": 1250,
      "views": 15000
    }
  ]
}
```

### Get Single Reel
```http
GET /reels/:id

Response: 200 OK
{
  "success": true,
  "data": { ... }
}
```

### Upload Reel
```http
POST /reels/upload
Authorization: Bearer <token>
Content-Type: multipart/form-data

video: <file>
thumbnail: <file>
destinationId: "dest_id"
caption: "Amazing place!"

Response: 201 Created
{
  "success": true,
  "message": "Reel uploaded successfully",
  "data": { ... }
}
```

### Like Reel
```http
POST /reels/:id/like
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "message": "Reel liked",
  "likes": 1251
}
```

### Track View
```http
POST /reels/:id/view

Response: 200 OK
{
  "success": true,
  "views": 15001
}
```

---

## 8. Premium Subscription APIs

### Get Plans
```http
GET /premium/plans

Response: 200 OK
{
  "success": true,
  "data": [
    {
      "id": "monthly",
      "name": "Monthly Premium",
      "price": 199,
      "duration": "1 month",
      "features": []
    },
    {
      "id": "yearly",
      "name": "Yearly Premium",
      "price": 999,
      "duration": "1 year",
      "features": []
    }
  ]
}
```

### Subscribe
```http
POST /premium/subscribe
Authorization: Bearer <token>
Content-Type: application/json

{
  "plan": "monthly"
}

Response: 200 OK
{
  "success": true,
  "data": {
    "orderId": "order_id_here",
    "amount": 199,
    "currency": "INR",
    "razorpayKey": "rzp_key"
  }
}
```

### Verify Payment
```http
POST /premium/verify-payment
Authorization: Bearer <token>
Content-Type: application/json

{
  "orderId": "order_id",
  "paymentId": "payment_id",
  "signature": "signature"
}

Response: 200 OK
{
  "success": true,
  "message": "Premium activated successfully",
  "data": {
    "isPremium": true,
    "premiumExpiry": "2024-04-15T00:00:00.000Z"
  }
}
```

### Check Status
```http
GET /premium/status
Authorization: Bearer <token>

Response: 200 OK
{
  "success": true,
  "data": {
    "isPremium": true,
    "plan": "monthly",
    "expiryDate": "2024-04-15T00:00:00.000Z",
    "daysRemaining": 25
  }
}
```

---

## 9. Admin APIs

### Dashboard Stats
```http
GET /admin/dashboard
Authorization: Bearer <admin_token>

Response: 200 OK
{
  "success": true,
  "data": {
    "totalUsers": 15420,
    "activeUsers": 8934,
    "premiumUsers": 456,
    "totalDestinations": 342,
    "totalReels": 1289,
    "earnings": {
      "today": 12500,
      "thisMonth": 327600,
      "total": 1250000
    }
  }
}
```

### Get All Users
```http
GET /admin/users?page=1&limit=50
Authorization: Bearer <admin_token>

Response: 200 OK
{
  "success": true,
  "data": [ ... ],
  "pagination": { ... }
}
```

### Approve Listing
```http
PUT /admin/listings/:id/approve
Authorization: Bearer <admin_token>

Response: 200 OK
{
  "success": true,
  "message": "Listing approved"
}
```

### Get Analytics
```http
GET /admin/analytics?startDate=2024-01-01&endDate=2024-03-31
Authorization: Bearer <admin_token>

Response: 200 OK
{
  "success": true,
  "data": {
    "revenue": { ... },
    "users": { ... },
    "bookings": { ... }
  }
}
```

---

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Not authorized to access this route"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Access denied"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details (in development mode)"
}
```

---

## Rate Limiting

- **Free Users**: 100 requests per 15 minutes
- **Premium Users**: 500 requests per 15 minutes
- **Admin**: Unlimited

---

## Pagination

All list endpoints support pagination:
```
?page=1&limit=20
```

Response includes:
```json
{
  "pagination": {
    "total": 100,
    "page": 1,
    "pages": 5,
    "limit": 20
  }
}
```
