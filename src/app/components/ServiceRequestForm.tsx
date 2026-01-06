'use client'

import React, { useState } from 'react';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    // Company Information
    companyName: '',
    companySize: '',
    industry: '',
    website: '',
    
    // Contact Information
    contactName: '',
    email: '',
    phone: '',
    position: '',
    
    // Service Selection
    primaryService: '',
    additionalServices: [],
    
    // Website Development Specifics
    websiteType: '',
    features: [],
    budget: '',
    timeline: '',
    
    // Project Details
    projectDescription: '',
    goals: '',
    hasExistingWebsite: '',
    currentWebsiteUrl: '',
    
    // Additional Information
    referralSource: '',
    preferredContactMethod: 'email',
    additionalNotes: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    {
      id: 'website-development',
      name: 'Company/Organization Website Development',
      description: 'Professional website design and development',
      featured: true
    },
    {
      id: 'web-app',
      name: 'Web Application Development',
      description: 'Custom web applications and platforms'
    },
    {
      id: 'mobile-app',
      name: 'Mobile App Development',
      description: 'iOS and Android applications'
    },
    {
      id: 'blockchain',
      name: 'Web3 & Blockchain Solutions',
      description: 'Smart contracts and DeFi applications'
    },
    {
      id: 'ai-integration',
      name: 'AI Integration Services',
      description: 'AI-powered business solutions'
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'SEO, social media, and content marketing'
    }
  ];

  const websiteTypes = [
    'Corporate Website',
    'E-commerce Store',
    'Portfolio Website',
    'Blog/Content Platform',
    'Landing Page',
    'Non-profit Website',
    'Educational Platform',
    'Booking/Reservation System',
    'Custom Solution'
  ];

  const websiteFeatures = [
    'Responsive Design',
    'Content Management System (CMS)',
    'E-commerce Functionality',
    'Blog Section',
    'Contact Forms',
    'Live Chat Integration',
    'Multi-language Support',
    'SEO Optimization',
    'Analytics Integration',
    'Social Media Integration',
    'Newsletter Subscription',
    'User Authentication',
    'Payment Gateway',
    'Custom API Integration'
  ];

  const budgetRanges = [
    'Under $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    'Over $100,000',
    'To Be Discussed'
  ];

  const timelines = [
    'ASAP (Within 1 month)',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    'Flexible',
    'To Be Discussed'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    if (type === 'checkbox') {
      if (name === 'additionalServices') {
        setFormData((prev: any) => ({
          ...prev,
          additionalServices: checked
            ? [...prev.additionalServices, value]
            : prev.additionalServices.filter((s: string) => s !== value)
        }));
      } else if (name === 'features') {
        setFormData((prev: any) => ({
          ...prev,
          features: checked
            ? [...prev.features, value]
            : prev.features.filter((f: string) => f !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const emailSubject = `Service Request from ${formData.companyName}`;
    const emailBody = `
NEW SERVICE REQUEST - SEISMIC LABS

COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Name: ${formData.companyName}
Company Size: ${formData.companySize}
Industry: ${formData.industry}
Current Website: ${formData.website || 'N/A'}

CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.contactName}
Position: ${formData.position}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Contact Method: ${formData.preferredContactMethod}

SERVICE SELECTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Primary Service: ${services.find(s => s.id === formData.primaryService)?.name || 'Not specified'}
Additional Services: ${formData.additionalServices.length > 0 ? formData.additionalServices.map((id: string) => services.find(s => s.id === id)?.name).join(', ') : 'None'}

WEBSITE DEVELOPMENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type: ${formData.websiteType || 'Not specified'}
Features Required: ${formData.features.length > 0 ? formData.features.join(', ') : 'Not specified'}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}
Has Existing Website: ${formData.hasExistingWebsite}
Current Website URL: ${formData.currentWebsiteUrl || 'N/A'}

PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Description:
${formData.projectDescription || 'Not provided'}

Goals:
${formData.goals || 'Not provided'}

Additional Notes:
${formData.additionalNotes || 'None'}

REFERRAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
How did you hear about us: ${formData.referralSource || 'Not specified'}
    `;

    // Open Gmail with pre-filled content
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hellodaries@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(gmailUrl, '_blank');
    
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (isStepValid()) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const isStepValid = () => {
    switch(currentStep) {
      case 1:
        return formData.companyName && formData.industry && formData.contactName && formData.email;
      case 2:
        return formData.primaryService;
      case 3:
        if (formData.primaryService === 'website-development') {
          return formData.websiteType && formData.budget && formData.timeline;
        }
        return formData.budget && formData.timeline;
      case 4:
        return formData.projectDescription;
      default:
        return true;
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0f172a] py-12 px-4">
        <div className="max-w-2xl mx-auto bg-green-500 border-4 border-black p-8 text-center transform rotate-1">
          <div className="w-20 h-20 bg-[#0f172a] border-4 border-black rounded-brutal flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Request Submitted Successfully!</h2>
          <p className="font-mono text-white/90 mb-6">
            Thank you for your interest in Seismic Labs. We&apos;ve received your service request and will get back to you within 24-48 hours.
          </p>
          <div className="bg-[#0f172a] border-2 border-black p-4 mb-6">
            <p className="text-sm font-mono text-white">
              <strong className="font-bold">Next Steps:</strong><br/>
              1. Check your email for a confirmation<br/>
              2. Our team will review your requirements<br/>
              3. We&apos;ll schedule a consultation call to discuss your project
            </p>
          </div>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setCurrentStep(1);
              setFormData({
                companyName: '', companySize: '', industry: '', website: '',
                contactName: '', email: '', phone: '', position: '',
                primaryService: '', additionalServices: [],
                websiteType: '', features: [], budget: '', timeline: '',
                projectDescription: '', goals: '', hasExistingWebsite: '', currentWebsiteUrl: '',
                referralSource: '', preferredContactMethod: 'email', additionalNotes: ''
              });
            }}
            className="bg-[#0f172a] text-white px-8 py-3 rounded-brutal border-4 border-black shadow-brutal hover:translate-shadow hover:shadow-none transition-all font-bold"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
            <span className="bg-blue-600 border-4 border-black px-4 md:px-6 py-2 inline-block transform -rotate-1">
              Service Request Form
            </span>
          </h1>
          <p className="font-mono text-gray-300 mt-4">Let&apos;s build something amazing together</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-300'
                } font-semibold transition-colors`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-blue-600' : 'bg-gray-600'
                  } transition-colors`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-blue-200">
            <span>Company Info</span>
            <span>Services</span>
            <span>Details</span>
            <span>Review</span>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-blue-600 border-4 border-black p-6 md:p-8 transform rotate-1">
          {/* Step 1: Company & Contact Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-6">Company & Contact Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="Acme Corporation"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Industry *
                  </label>
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="e.g., Technology, Healthcare, Finance"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="https://example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Position/Title
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="CEO, CTO, Marketing Manager, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-6">Select Your Services</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Primary Service *
                </label>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => setFormData(prev => ({ ...prev, primaryService: service.id }))}
                      className={`relative p-4 border-4 border-black cursor-pointer transition-all ${
                        formData.primaryService === service.id
                          ? 'bg-blue-600'
                          : 'bg-[#0f172a] hover:bg-[#1e293b]'
                      } ${service.featured ? 'ring-4 ring-blue-400' : ''}`}
                    >
                      {service.featured && (
                        <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      <div className="flex items-start">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white">{service.name}</h3>
                          <p className="text-sm text-white/90 mt-1 font-mono">{service.description}</p>
                        </div>
                      </div>
                      <input
                        type="radio"
                        name="primaryService"
                        value={service.id}
                        checked={formData.primaryService === service.id}
                        onChange={handleInputChange}
                        className="absolute top-4 right-4"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Additional Services (Optional)
                </label>
                <div className="grid md:grid-cols-3 gap-3">
                  {services
                    .filter(s => s.id !== formData.primaryService)
                    .map((service) => (
                      <label
                        key={service.id}
                        className="flex items-center p-3 border-2 border-black rounded-brutal bg-[#0f172a] hover:bg-[#1e293b] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          name="additionalServices"
                          value={service.id}
                          checked={formData.additionalServices.includes(service.id as never)}
                          onChange={handleInputChange}
                          className="mr-3"
                        />
                        <div>
                          <span className="text-sm font-medium text-white font-mono">{service.name.replace('Development', '').replace('Solutions', '').replace('Services', '').trim()}</span>
                        </div>
                      </label>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Website Development Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-6">
                {formData.primaryService === 'website-development' ? 'Website Development Details' : 'Project Details'}
              </h2>
              
              {formData.primaryService === 'website-development' && (
                <>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Website Type *
                    </label>
                    <select
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <option value="">Select website type</option>
                      {websiteTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Required Features
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {websiteFeatures.map((feature) => (
                        <label
                          key={feature}
                          className="flex items-center p-3 border-2 border-black rounded-brutal bg-[#0f172a] hover:bg-[#1e293b] cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="features"
                            value={feature}
                            checked={formData.features.includes(feature as never)}
                            onChange={handleInputChange}
                            className="mr-3"
                          />
                          <span className="text-sm font-mono text-white">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-white mb-2">
                      Do you have an existing website?
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasExistingWebsite"
                          value="yes"
                          checked={formData.hasExistingWebsite === 'yes'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-white font-mono">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasExistingWebsite"
                          value="no"
                          checked={formData.hasExistingWebsite === 'no'}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-white font-mono">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.hasExistingWebsite === 'yes' && (
                    <div>
                      <label className="block text-sm font-bold text-white mb-2">
                        Current Website URL
                      </label>
                      <input
                        type="url"
                        name="currentWebsiteUrl"
                        value={formData.currentWebsiteUrl}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                        placeholder="https://currentwebsite.com"
                      />
                    </div>
                  )}
                </>
              )}

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Budget Range *
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2">
                    Project Timeline *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Project Description & Review */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white mb-6">Project Details & Review</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Describe your project, what you're looking to build, and any specific requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Goals & Objectives
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="What are your main goals for this project? What success looks like?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                    className="w-full px-4 py-2 border-2 border-black rounded-brutal bg-[#0f172a] text-white font-mono focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <option value="">Select source</option>
                  <option value="google">Google Search</option>
                  <option value="social-media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="advertisement">Advertisement</option>
                  <option value="event">Event/Conference</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="email"
                      checked={formData.preferredContactMethod === 'email'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="phone"
                      checked={formData.preferredContactMethod === 'phone'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Phone</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="preferredContactMethod"
                      value="both"
                      checked={formData.preferredContactMethod === 'both'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span className="text-gray-700">Both</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any other information you'd like to share..."
                />
              </div>

              {/* Summary */}
              <div className="bg-blue-50 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-extrabold text-white mb-4">Request Summary</h3>
                <div className="space-y-2 text-sm font-mono text-white/90">
                  <p><strong>Company:</strong> {formData.companyName || 'Not provided'}</p>
                  <p><strong>Primary Service:</strong> {services.find(s => s.id === formData.primaryService)?.name || 'Not selected'}</p>
                  {formData.budget && <p><strong>Budget:</strong> {formData.budget}</p>}
                  {formData.timeline && <p><strong>Timeline:</strong> {formData.timeline}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-brutal border-2 border-black transition-all font-bold ${
                currentStep === 1
                  ? 'bg-[#1e293b] text-gray-500 cursor-not-allowed'
                  : 'bg-[#1e293b] text-white hover:bg-[#0f172a] hover:translate-shadow hover:shadow-brutal'
              }`}
            >
              Previous
            </button>
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`px-6 py-2 rounded-brutal border-4 border-black transition-all font-bold ${
                  !isStepValid()
                    ? 'bg-[#1e293b] text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white shadow-brutal hover:translate-shadow hover:shadow-none'
                }`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 text-white rounded-brutal border-4 border-black shadow-brutal hover:translate-shadow hover:shadow-none transition-all font-bold"
              >
                Submit Request
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;

