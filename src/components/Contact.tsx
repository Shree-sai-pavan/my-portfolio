import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle, AlertCircle, Loader } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    opportunityType: '',
    message: '',
    website: '' // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    errors?: string[];
  }>({ type: null, message: '', errors: [] });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Clear submit status when user makes changes
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '', errors: [] });
    }
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    // Opportunity Type validation
    if (!formData.opportunityType) {
      errors.opportunityType = 'Please select an opportunity type';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Message must be at least 20 characters';
    }

    // Honeypot validation (spam protection)
    if (formData.website) {
      errors.website = 'Spam detected';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '', errors: [] });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you for your message! I\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          company: '',
          opportunityType: '',
          message: '',
          website: ''
        });
        setFieldErrors({});
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'An error occurred while sending your message.',
          errors: data.errors || []
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'It might be facing some issues. Please try again or go through the "Get in touch"'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-purple-300" size={24} />,
      label: 'Email',
      value: 'saipavan3631@gmail.com',
      href: 'mailto:saipavan3631@gmail.com'
    },
    {
      icon: <Phone className="text-blue-300" size={24} />,
      label: 'Phone',
      value: '+91 9110223631',
      href: 'tel:+919110223631'
    },
    {
      icon: <MapPin className="text-green-300" size={24} />,
      label: 'Location',
      value: 'Bengaluru, Karnataka, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/Shree-sai-pavan',
      color: 'hover:text-white',
      external: true
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pavan1410/',
      color: 'hover:text-blue-400',
      external: true
    },
    {
      icon: <ExternalLink size={20} />,
      label: 'Portfolio',
      href: '#projects',
      color: 'hover:text-purple-400',
      external: false
    }
  ];

  const opportunityTypes = [
    'Internship',
    'Partnership',
    'Full Time Opportunity',
    'Project Inquiry',
    'Other'
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-purple-300">Connect</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how 
            we can work together to create innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 group hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-white/10 rounded-xl p-3 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">{info.label}</div>
                      <div className="text-white font-medium group-hover:text-purple-300 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Follow My Work</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    {...(social.external ? {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    } : {})}
                    className={`bg-white/10 hover:bg-white/20 p-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 text-white/70 ${social.color} transform hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-medium">Available for opportunities</span>
              </div>
              <p className="text-white/70 text-sm mt-2">
                Currently seeking internships and entry-level positions in AI and Full-Stack Development
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Start a Conversation</h3>
            
            {/* Submit Status Messages */}
            {submitStatus.type && (
              <div className={`mb-6 p-4 rounded-lg border ${
                submitStatus.type === 'success' 
                  ? 'bg-green-500/20 border-green-500/40 text-green-300' 
                  : 'bg-red-500/20 border-red-500/40 text-red-300'
              }`}>
                <div className="flex items-center space-x-2">
                  {submitStatus.type === 'success' ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="font-medium">{submitStatus.message}</span>
                </div>
                {submitStatus.errors && submitStatus.errors.length > 0 && (
                  <ul className="mt-2 ml-6 list-disc text-sm">
                    {submitStatus.errors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-white/70 text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      fieldErrors.fullName 
                        ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/20' 
                        : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/20'
                    }`}
                    placeholder="Your full name"
                  />
                  {fieldErrors.fullName && (
                    <p className="mt-1 text-red-300 text-sm">{fieldErrors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      fieldErrors.email 
                        ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/20' 
                        : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/20'
                    }`}
                    placeholder="your@email.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-red-300 text-sm">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-white/70 text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="opportunityType" className="block text-white/70 text-sm font-medium mb-2">
                  Opportunity Type *
                </label>
                <select
                  id="opportunityType"
                  name="opportunityType"
                  value={formData.opportunityType}
                  onChange={handleInputChange}
                  required
                  className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                    fieldErrors.opportunityType 
                      ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/20' 
                      : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/20'
                  }`}
                >
                  <option value="">Select opportunity type</option>
                  {opportunityTypes.map((type) => (
                    <option key={type} value={type} className="bg-gray-800 text-white">
                      {type}
                    </option>
                  ))}
                </select>
                {fieldErrors.opportunityType && (
                  <p className="mt-1 text-red-300 text-sm">{fieldErrors.opportunityType}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2">
                  Message * <span className="text-white/50">(minimum 20 characters)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full bg-white/10 border rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    fieldErrors.message 
                      ? 'border-red-500/60 focus:border-red-400 focus:ring-red-400/20' 
                      : 'border-white/20 focus:border-purple-400 focus:ring-purple-400/20'
                  }`}
                  placeholder="Tell me about the opportunity or how we can collaborate..."
                />
                <div className="flex justify-between items-center mt-1">
                  {fieldErrors.message && (
                    <p className="text-red-300 text-sm">{fieldErrors.message}</p>
                  )}
                  <p className={`text-xs ml-auto ${
                    formData.message.length >= 20 ? 'text-green-300' : 'text-white/50'
                  }`}>
                    {formData.message.length}/20 characters
                  </p>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <p className="text-white/40 text-xs mt-4 text-center">
              Your information is secure and will only be used to respond to your inquiry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;