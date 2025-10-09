const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      fatherName,
      dateOfBirth,
      country,
      teacherGender,
      teacherLanguage,
      timing,
      skypeZoom,
      email,
      course,
      message
    } = req.body;

    // Validate required fields
    if (!name || !fatherName || !dateOfBirth || !country || !teacherGender || 
        !teacherLanguage || !timing || !skypeZoom || !email || !course) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Create email content
    const emailContent = `
      <h2>New Student Registration - Peace Online Academy</h2>
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h3 style="color: #1e5f3f;">Student Information</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Father Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${fatherName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Date of Birth:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${dateOfBirth}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Country:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${country}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Skype/Zoom ID:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${skypeZoom}</td>
          </tr>
        </table>

        <h3 style="color: #1e5f3f;">Course Preferences</h3>
        <table style="border-collapse: collapse; width: 100%; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold; width: 30%;">Selected Course:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${course}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Teacher Gender:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${teacherGender}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Teacher Language:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${teacherLanguage}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Preferred Timing:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${timing}</td>
          </tr>
        </table>

        ${message ? `
        <h3 style="color: #1e5f3f;">Additional Information</h3>
        <div style="padding: 15px; border: 1px solid #ddd; background-color: #f9f9f9; border-radius: 5px;">
          ${message}
        </div>
        ` : ''}

        <hr style="margin: 30px 0; border: none; border-top: 2px solid #1e5f3f;">
        <p style="color: #666; font-size: 12px;">
          This registration was submitted from Peace Online Academy website on ${new Date().toLocaleString()}.
        </p>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'muhammadkhuzaim50@gmail.com',
      subject: `New Student Registration - ${name} (${course})`,
      html: emailContent,
      replyTo: email
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Registration submitted successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit registration. Please try again later.' 
    });
  }
});

// Serve static files
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});

