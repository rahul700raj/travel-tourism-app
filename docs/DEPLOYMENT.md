# 🚀 Deployment Guide - Travel & Tourism App

Complete guide for deploying the Travel & Tourism App to production.

---

## 📋 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Database setup complete
- [ ] API keys obtained (OpenAI, Google Maps, Razorpay, etc.)
- [ ] Firebase project created
- [ ] Domain name purchased (optional)
- [ ] SSL certificate ready
- [ ] Backup strategy in place

---

## 🗄️ Database Setup (MongoDB Atlas)

### 1. Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for free tier
3. Create a new cluster

### 2. Configure Database
```bash
# Create database: travel-tourism
# Create collections:
- users
- destinations
- trips
- reels
- bookings
- guides
- affiliate_clicks
- subscriptions
- businesses
```

### 3. Get Connection String
```
mongodb+srv://username:password@cluster.mongodb.net/travel-tourism?retryWrites=true&w=majority
```

### 4. Whitelist IP Addresses
- Add `0.0.0.0/0` for Railway deployment
- Or specific Railway IPs

---

## 🚂 Backend Deployment (Railway)

### Option 1: Deploy via GitHub

1. **Connect Repository**
```bash
# Push code to GitHub
git add .
git commit -m "Prepare for deployment"
git push origin main
```

2. **Railway Setup**
- Go to [Railway.app](https://railway.app)
- Click "New Project"
- Select "Deploy from GitHub repo"
- Choose `travel-tourism-app` repository
- Select `backend` folder as root

3. **Environment Variables**
Add these in Railway dashboard:
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_key
GOOGLE_MAPS_API_KEY=your_maps_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
FIREBASE_PROJECT_ID=your_firebase_project
FIREBASE_PRIVATE_KEY=your_firebase_key
FIREBASE_CLIENT_EMAIL=your_firebase_email
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=your_twilio_phone
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_BUCKET_NAME=your_bucket_name
```

4. **Deploy**
- Railway will automatically detect Node.js
- Build command: `npm install`
- Start command: `npm start`
- Deploy!

### Option 2: Deploy via Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Initialize project
cd backend
railway init

# Link to project
railway link

# Add environment variables
railway variables set MONGODB_URI="your_connection_string"
railway variables set JWT_SECRET="your_secret"
# ... add all variables

# Deploy
railway up
```

### Get Deployment URL
```
https://your-app.railway.app
```

---

## 📱 Frontend Deployment

### Android (Google Play Store)

#### 1. Prepare for Release
```bash
cd frontend

# Update version in pubspec.yaml
version: 1.0.0+1

# Build release APK
flutter build apk --release

# Or build App Bundle (recommended)
flutter build appbundle --release
```

#### 2. Sign the App
```bash
# Generate keystore
keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload

# Configure signing in android/app/build.gradle
signingConfigs {
    release {
        keyAlias keystoreProperties['keyAlias']
        keyPassword keystoreProperties['keyPassword']
        storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
        storePassword keystoreProperties['storePassword']
    }
}
```

#### 3. Upload to Play Store
1. Create Google Play Console account ($25 one-time fee)
2. Create new app
3. Fill app details, screenshots, description
4. Upload APK/App Bundle
5. Set pricing (Free)
6. Submit for review

### iOS (Apple App Store)

#### 1. Prepare for Release
```bash
# Build iOS release
flutter build ios --release

# Open Xcode
open ios/Runner.xcworkspace
```

#### 2. Configure in Xcode
- Set bundle identifier
- Configure signing & capabilities
- Add app icons
- Set deployment target (iOS 12+)

#### 3. Archive and Upload
1. Product → Archive
2. Distribute App
3. Upload to App Store Connect
4. Fill app information
5. Submit for review

### Web Deployment (GitHub Pages)

Already deployed! ✅
- URL: https://rahul700raj.github.io/travel-tourism-app/

To update:
```bash
# Update index.html in docs folder
git add docs/index.html
git commit -m "Update landing page"
git push origin main
```

---

## 🔥 Firebase Setup

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create new project
3. Add Android app
4. Add iOS app
5. Add Web app

### 2. Enable Services
- **Authentication**: Email, Google, Phone
- **Firestore**: For real-time data (optional)
- **Storage**: For images/videos
- **Cloud Messaging**: For push notifications

### 3. Download Config Files
- `google-services.json` for Android
- `GoogleService-Info.plist` for iOS
- Firebase config for Web

### 4. Add to Project
```bash
# Android
cp google-services.json frontend/android/app/

# iOS
cp GoogleService-Info.plist frontend/ios/Runner/
```

---

## 🔑 API Keys Setup

### OpenAI API
1. Go to [OpenAI Platform](https://platform.openai.com)
2. Create API key
3. Add to environment variables

### Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Enable Maps SDK for Android/iOS
3. Enable Places API
4. Enable Directions API
5. Create API key
6. Add restrictions (optional)

### Razorpay
1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Get API keys (Test & Live)
3. Configure webhooks

### Twilio (OTP)
1. Go to [Twilio Console](https://www.twilio.com/console)
2. Get Account SID and Auth Token
3. Get phone number

### Google AdMob
1. Go to [AdMob Console](https://apps.admob.com)
2. Create app
3. Create ad units (Banner, Interstitial, Native)
4. Get App ID and Ad Unit IDs

---

## 🌐 Domain & SSL Setup

### Custom Domain (Optional)

#### For Backend API
1. Purchase domain (e.g., api.travelapp.com)
2. In Railway:
   - Settings → Domains
   - Add custom domain
   - Update DNS records:
     ```
     Type: CNAME
     Name: api
     Value: your-app.railway.app
     ```

#### For Frontend Web
1. In GitHub Pages settings:
   - Add custom domain
   - Update DNS:
     ```
     Type: CNAME
     Name: www
     Value: rahul700raj.github.io
     ```

### SSL Certificate
- Railway provides automatic SSL
- GitHub Pages provides automatic SSL
- For custom domains, use Let's Encrypt

---

## 📊 Monitoring & Analytics

### Backend Monitoring

#### Railway Logs
```bash
# View logs
railway logs

# Follow logs
railway logs --follow
```

#### Error Tracking (Sentry)
```bash
npm install @sentry/node

# In server.js
const Sentry = require("@sentry/node");
Sentry.init({ dsn: "your_sentry_dsn" });
```

### Frontend Analytics

#### Google Analytics
```yaml
# pubspec.yaml
dependencies:
  firebase_analytics: ^10.7.0
```

#### Crashlytics
```yaml
dependencies:
  firebase_crashlytics: ^3.4.0
```

---

## 🔄 CI/CD Setup (GitHub Actions)

### Backend CI/CD

Create `.github/workflows/backend-deploy.yml`:
```yaml
name: Deploy Backend to Railway

on:
  push:
    branches: [ main ]
    paths:
      - 'backend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Railway CLI
        run: npm install -g @railway/cli
      
      - name: Deploy to Railway
        run: |
          cd backend
          railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

### Frontend CI/CD

Create `.github/workflows/frontend-deploy.yml`:
```yaml
name: Build and Deploy Flutter App

on:
  push:
    branches: [ main ]
    paths:
      - 'frontend/**'

jobs:
  build-android:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Flutter
        uses: subosito/flutter-action@v2
        with:
          flutter-version: '3.16.0'
      
      - name: Build APK
        run: |
          cd frontend
          flutter pub get
          flutter build apk --release
      
      - name: Upload APK
        uses: actions/upload-artifact@v3
        with:
          name: app-release.apk
          path: frontend/build/app/outputs/flutter-apk/app-release.apk
```

---

## 🔐 Security Best Practices

### 1. Environment Variables
- Never commit `.env` files
- Use Railway's environment variables
- Rotate secrets regularly

### 2. API Security
- Enable rate limiting
- Use CORS properly
- Validate all inputs
- Sanitize user data

### 3. Database Security
- Use strong passwords
- Enable IP whitelisting
- Regular backups
- Encryption at rest

### 4. App Security
- Obfuscate code
- Use ProGuard (Android)
- Enable App Transport Security (iOS)
- Implement certificate pinning

---

## 📦 Backup Strategy

### Database Backup
```bash
# MongoDB Atlas automatic backups
# Or manual backup:
mongodump --uri="mongodb+srv://..." --out=backup/

# Restore
mongorestore --uri="mongodb+srv://..." backup/
```

### Code Backup
- GitHub repository (primary)
- GitLab mirror (secondary)
- Local backups

---

## 🧪 Testing in Production

### Health Check
```bash
curl https://your-api.railway.app/health
```

### API Testing
```bash
# Test authentication
curl -X POST https://your-api.railway.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password"}'

# Test destinations
curl https://your-api.railway.app/api/destinations
```

### Load Testing
```bash
# Install Apache Bench
apt-get install apache2-utils

# Test with 1000 requests, 10 concurrent
ab -n 1000 -c 10 https://your-api.railway.app/api/destinations
```

---

## 📈 Scaling Strategy

### Horizontal Scaling
- Railway auto-scales based on load
- Add more instances if needed

### Database Scaling
- MongoDB Atlas auto-scales
- Upgrade tier for more resources

### CDN for Static Assets
- Use Cloudflare CDN
- Cache images, videos
- Reduce server load

---

## 🐛 Troubleshooting

### Common Issues

#### 1. App Not Starting
```bash
# Check logs
railway logs

# Verify environment variables
railway variables

# Check build logs
railway logs --deployment
```

#### 2. Database Connection Failed
- Verify MongoDB URI
- Check IP whitelist
- Test connection locally

#### 3. API Timeout
- Increase timeout in Railway settings
- Optimize database queries
- Add caching layer

#### 4. Build Failed
- Check Node.js version
- Verify dependencies
- Clear cache and rebuild

---

## 📞 Support & Resources

### Documentation
- [Railway Docs](https://docs.railway.app)
- [Flutter Docs](https://docs.flutter.dev)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)

### Community
- GitHub Issues: Report bugs
- Discord: Join community
- Email: rm2778643@gmail.com

---

## ✅ Post-Deployment Checklist

- [ ] Backend API is live and responding
- [ ] Database is connected and working
- [ ] All API endpoints tested
- [ ] Mobile app connects to production API
- [ ] Payment gateway tested (test mode)
- [ ] Push notifications working
- [ ] Analytics tracking enabled
- [ ] Error monitoring setup
- [ ] Backup strategy implemented
- [ ] Documentation updated
- [ ] Team notified

---

## 🎉 Launch Checklist

- [ ] App submitted to Play Store
- [ ] App submitted to App Store
- [ ] Landing page live
- [ ] Social media accounts created
- [ ] Marketing materials ready
- [ ] Support email setup
- [ ] Terms & Privacy Policy published
- [ ] Beta testing completed
- [ ] Performance optimized
- [ ] Security audit done

---

**Deployment Status**: ✅ Backend Ready | 🚧 Frontend In Progress

**Live URLs**:
- Backend API: `https://your-app.railway.app`
- Landing Page: `https://rahul700raj.github.io/travel-tourism-app/`
- GitHub Repo: `https://github.com/rahul700raj/travel-tourism-app`

**Contact**: rm2778643@gmail.com
