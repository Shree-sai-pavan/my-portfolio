import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const app = express();
const PORT = process.env.PORT || 3001;

// Create DOMPurify instance
const window = new JSDOM('').window;
const purify = DOMPurify(window);

// Security middleware
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? (process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['https://your-domain.com'])
    : ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));

// Rate limiting
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many contact form submissions. Please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Body parser middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
});

// Email configuration
const createTransporter = () => {
  // For development, you can use a service like Gmail
  // For production, use a proper email service like SendGrid, AWS SES, etc.
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'Saipavan3631@gmail.com',
      pass: process.env.EMAIL_PASS || 'ctrv ruht wmem mmva'
    }
  });
};

// Input validation functions
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateInput = (data) => {
  const errors = [];
  
  // Required field validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push('Full name must be at least 2 characters long');
  }
  
  if (!data.email || !validateEmail(data.email)) {
    errors.push('Please provide a valid email address');
  }
  
  if (!data.opportunityType) {
    errors.push('Please select an opportunity type');
  }
  
  if (!data.message || data.message.trim().length < 20) {
    errors.push('Message must be at least 20 characters long');
  }
  
  // Check for honeypot field (spam protection)
  if (data.website) {
    errors.push('Spam detected');
  }
  
  // Validate opportunity type against allowed values
  const allowedTypes = ['Internship', 'Partnership', 'Full Time Opportunity', 'Project Inquiry', 'Other'];
  if (data.opportunityType && !allowedTypes.includes(data.opportunityType)) {
    errors.push('Invalid opportunity type selected');
  }
  
  return errors;
};

// Sanitize input data
const sanitizeData = (data) => {
  return {
    fullName: purify.sanitize(data.fullName?.trim() || ''),
    email: purify.sanitize(data.email?.trim().toLowerCase() || ''),
    company: purify.sanitize(data.company?.trim() || ''),
    opportunityType: purify.sanitize(data.opportunityType || ''),
    message: purify.sanitize(data.message?.trim() || ''),
    website: data.website || '' // Honeypot field
  };
};

// Format email body
const formatEmailBody = (data, timestamp) => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Submission Time:</strong> ${timestamp}</p>
    <hr>
    <p><strong>Full Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
    <p><strong>Opportunity Type:</strong> ${data.opportunityType}</p>
    <p><strong>Message:</strong></p>
    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
      ${data.message.replace(/\n/g, '<br>')}
    </div>
    <hr>
    <p style="color: #666; font-size: 12px;">
      This email was sent from the portfolio contact form.
    </p>
  `;
};

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    // Sanitize input data
    const sanitizedData = sanitizeData(req.body);
    
    // Validate input
    const validationErrors = validateInput(sanitizedData);
    if (validationErrors.length > 0) {
      console.log('Validation errors:', validationErrors);
      return res.status(400).json({
        success: false,
        errors: validationErrors
      });
    }
    
    // Create email transporter
    const transporter = createTransporter();
    
    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Email transporter verified successfully');
    } catch (error) {
      console.error('Email transporter verification failed:', error);
      return res.status(500).json({
        success: false,
        error: 'Email service configuration error'
      });
    }
    
    // Prepare email
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    
    const mailOptions = {
      from: process.env.EMAIL_USER || 'Saipavan3631@gmail.com',
      to: 'saipavan3631@gmail.com',
      subject: 'Contact Form Portfolio Submission',
      html: formatEmailBody(sanitizedData, timestamp),
      replyTo: sanitizedData.email
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to saipavan3631@gmail.com');
    
    // Send success response
    res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully! I\'ll get back to you soon.'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'An error occurred while sending your message. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler - This should be LAST
app.use('*', (req, res) => {
  console.log(`404 - Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});

export default app;