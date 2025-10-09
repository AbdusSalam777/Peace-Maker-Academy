# Peace Online Academy - Deployment Guide

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration

#### Step 1: Create Gmail App Password
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password

#### Step 2: Create Environment File
Create a `.env` file in the project root with:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=3000
```

### 3. Run the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The server will run on `http://localhost:3000`

## Deployment Options

### Option 1: Heroku (Recommended)
1. Create a Heroku account
2. Install Heroku CLI
3. Create Heroku app:
   ```bash
   heroku create peace-online-academy
   ```
4. Set environment variables:
   ```bash
   heroku config:set EMAIL_USER=your-gmail@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   ```
5. Deploy:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push heroku main
   ```

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Set environment variables in Vercel dashboard
4. Deploy: `vercel --prod`

### Option 3: Railway
1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically

### Option 4: DigitalOcean App Platform
1. Create a new app in DigitalOcean
2. Connect your GitHub repository
3. Set environment variables
4. Deploy

## Testing the Contact Form

1. Fill out the contact form on the website
2. Submit the form
3. Check `muhammadkhuzaim50@gmail.com` for the email
4. The email will contain all form details in a formatted table

## Features

- ✅ Contact form sends emails to muhammadkhuzaim50@gmail.com
- ✅ Professional HTML email formatting
- ✅ Form validation
- ✅ Loading states
- ✅ Error handling
- ✅ Responsive design
- ✅ Course details page
- ✅ WhatsApp integration

## Troubleshooting

### Email Not Sending
1. Check if Gmail app password is correct
2. Ensure 2-factor authentication is enabled
3. Verify environment variables are set correctly
4. Check server logs for error messages

### Form Not Working
1. Ensure backend server is running
2. Check browser console for JavaScript errors
3. Verify API endpoint is accessible

## Support

For any issues, check the server logs or contact the development team.

