# 📧 EmailJS Integration Setup Guide

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com)
- Sign up for a free account
- Verify your email address

### 2. Add Email Service (Gmail)
1. **Login to EmailJS Dashboard**
2. **Go to "Email Services"**
3. **Click "Add New Service"**
4. **Select "Gmail"**
5. **Connect your Gmail account** (the one where you want to receive emails)
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
1. **Go to "Email Templates"**
2. **Click "Create New Template"**
3. **Use this template content:**

```
Subject: New Student Registration - Peace Online Academy

Dear Admin,

A new student has registered for a course at Peace Online Academy.

Student Details:
- Name: {{name}}
- Father Name: {{fatherName}}
- Date of Birth: {{dateOfBirth}}
- Country: {{country}}
- Email: {{email}}
- Phone/Skype/Zoom: {{skypeZoom}}

Course Preferences:
- Selected Course: {{course}}
- Teacher Gender: {{teacherGender}}
- Teacher Language: {{teacherLanguage}}
- Preferred Timing: {{timing}}

Additional Information:
{{message}}

Please contact the student to confirm enrollment.

Best regards,
Peace Online Academy Registration System
```

4. **Save the template**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Public Key
1. **Go to "Account" → "API Keys"**
2. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxxx`)

### 5. Update the Code
Replace these placeholders in `contact.html`:

```javascript
// Line 451: Replace YOUR_PUBLIC_KEY
emailjs.init("YOUR_ACTUAL_PUBLIC_KEY");

// Line 485: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_ACTUAL_SERVICE_ID', 'YOUR_ACTUAL_TEMPLATE_ID', formData)
```

## 📝 Your Configuration

Your EmailJS is now configured with:

```javascript
// Initialize EmailJS with your public key
emailjs.init("IO-od1b7zvRPh_b_5");

// Send email using EmailJS
emailjs.send('service_got0eod', 'template_eevh3cs', formData)
```

**Your Email Template (Update this in EmailJS Dashboard):**
```
Subject: New Student Registration - {{from_name}}

Dear {{to_name}},

{{message}}

Best regards,
Peace Online Academy Registration System
```

**Note:** This simplified template uses only standard EmailJS variables to avoid 422 errors.

**Email Delivery:** All emails will be sent to `muhammadkhuzaim50@gmail.com`

## ✅ Testing

1. **Fill out the contact form**
2. **Click "Submit Registration"**
3. **Check your Gmail inbox**
4. **You should receive the registration email**

## 🎯 Features Included

- ✅ **Automatic Email Delivery**: Sends to your Gmail when form is submitted
- ✅ **Loading States**: Shows spinner while sending
- ✅ **Success/Error Notifications**: User feedback with notifications
- ✅ **Form Reset**: Clears form after successful submission
- ✅ **Mobile Responsive**: Works on all devices
- ✅ **Professional Styling**: Beautiful notification system

## 📧 Email Content

The email will include all form fields:
- Student personal information
- Course preferences
- Teacher preferences
- Contact details
- Additional messages

## 🔧 Troubleshooting

### Common Issues:
1. **"Failed to submit"**: Check your Service ID and Template ID
2. **"Email not received"**: Check Gmail spam folder
3. **"Template not found"**: Make sure template is published
4. **"Service not connected"**: Reconnect Gmail service

### Support:
- EmailJS Documentation: [docs.emailjs.com](https://docs.emailjs.com)
- EmailJS Support: Available in their dashboard

## 🎉 You're Done!

Once configured, your contact form will automatically send emails to your Gmail whenever someone submits the registration form!

---

**Need Help?** Just provide me with your:
- Service ID
- Template ID  
- Public Key

And I'll update the code for you!
