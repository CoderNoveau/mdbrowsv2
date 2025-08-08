# 🚀 Production Setup Guide

## Overview
This guide covers the complete production deployment setup for Melbourne Designer Brows with enterprise-grade security and social media management capabilities.

## 🔐 Security Features Implemented

✅ **NextAuth.js Authentication**
- Industry-standard authentication framework
- JWT tokens with automatic expiration
- Secure session management

✅ **Password Security**
- bcrypt hashing with salt rounds (12)
- Secure password generation utility
- Production password validation

✅ **Rate Limiting**
- 5 login attempts per minute per IP
- 100 global requests per 15 minutes
- Configurable limits via environment

✅ **CSRF Protection**
- Token-based CSRF protection
- Secure cookie handling
- State-changing operation protection

✅ **Session Security**
- 8-hour session timeout
- Secure cookie settings
- Automatic session cleanup

## 🚀 Quick Setup

### 1. Generate Secure Credentials
```bash
npm run setup
```

This generates:
- Secure random password (16 characters)
- bcrypt hash for storage
- NextAuth secret key
- Complete .env.local template

### 2. Environment Configuration

Copy the generated values to `.env.local`:

```env
NEXTAUTH_SECRET="your_generated_secret"
NEXTAUTH_URL="https://mdbrows.com.au"
ADMIN_USERNAME="admin"
ADMIN_EMAIL="admin@mdbrows.com.au"
ADMIN_PASSWORD_HASH="$2a$12$..."

# API Keys (optional but recommended)
GOOGLE_PLACES_API_KEY="your_key"
GOOGLE_PLACE_ID="your_place_id"
INSTAGRAM_ACCESS_TOKEN="your_token"
FACEBOOK_PAGE_TOKEN="your_token"
```

### 3. Build and Deploy
```bash
npm run build
npm start
```

## 🛡️ Security Recommendations

### For Production Deployment:

1. **Environment Variables**
   - Never commit `.env.local` to version control
   - Use your hosting platform's environment variable system
   - Regularly rotate API keys and secrets

2. **HTTPS Configuration**
   - Force HTTPS in production
   - Set secure cookie flags
   - Enable HSTS headers

3. **Database Security** (if you upgrade to database storage)
   - Use connection pooling
   - Enable SSL connections
   - Regular backups and encryption

4. **Monitoring & Logging**
   - Set up error tracking (Sentry, LogRocket)
   - Monitor failed login attempts
   - Track API usage and rate limits

## 🔧 Advanced Configuration

### Custom Rate Limits
```env
SESSION_MAX_AGE=28800  # 8 hours in seconds
RATE_LIMIT_MAX=5       # Max attempts per minute
```

### Admin User Management
Multiple admin users can be configured by modifying `src/lib/auth-config.ts`:

```typescript
const ADMIN_USERS = [
  {
    id: "1",
    username: process.env.ADMIN_USERNAME || "admin",
    email: process.env.ADMIN_EMAIL || "admin@mdbrows.com.au",
    passwordHash: process.env.ADMIN_PASSWORD_HASH,
    role: "admin"
  },
  // Add more admin users here
];
```

## 📱 Social Media API Setup

### Instagram Business API
1. Create Facebook App
2. Add Instagram Basic Display
3. Generate access token
4. Add to environment variables

### Google Places API
1. Enable Places API in Google Cloud Console
2. Create API key with domain restrictions
3. Find your Place ID using Google's tool
4. Add both to environment variables

## 🔍 Admin Panel Features

- **Dashboard Overview**: Real-time statistics and recent activity
- **API Management**: Configure all third-party integrations
- **Blog Editor**: Full MDX support with draft/publish workflow
- **Gallery Manager**: Upload and organize portfolio images
- **Social Media Hub**: Schedule posts, track analytics
- **Review Management**: Monitor and respond to reviews
- **Analytics Dashboard**: Traffic, conversions, performance metrics

## 🚨 Security Monitoring

### Failed Login Attempts
All failed attempts are logged with:
- IP address
- Timestamp
- Username attempted
- Rate limit status

### Session Management
- Automatic cleanup of expired sessions
- Force logout after 8 hours
- Activity logging for admin actions

## 🆘 Troubleshooting

### Login Issues
1. Check environment variables are set correctly
2. Verify password hash matches generated password
3. Check rate limiting hasn't been triggered
4. Ensure NEXTAUTH_URL matches your domain

### API Issues
1. Verify API keys in environment variables
2. Check API key permissions and quotas
3. Test API endpoints independently
4. Review rate limiting logs

### Build Issues
1. Run `npm run lint` to check for errors
2. Verify all environment variables exist
3. Check Next.js build logs for specific errors

## 📞 Support

For issues with the admin system:
1. Check the troubleshooting section above
2. Review error logs in browser console
3. Verify environment configuration
4. Test with a fresh password generation

## 🔄 Updates & Maintenance

### Regular Security Updates
- Update dependencies monthly
- Rotate API keys quarterly
- Review admin access logs weekly
- Update passwords every 90 days

### Backup Recommendations
- Environment variables
- Admin user configurations
- Blog post content
- Gallery images
- Analytics data

---

**⚠️ CRITICAL**: Always test in a staging environment before deploying to production!