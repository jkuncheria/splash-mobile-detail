import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, Phone, MapPin, ChevronDown, Clock, Facebook, Instagram, Calendar, Users, Loader2, CheckCircle, X } from 'lucide-react';

interface ContactProps {
  simplified?: boolean;
}

const Contact: React.FC<ContactProps> = ({ simplified = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    message: ''
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const inquiryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'quote', label: 'Request a Quote' },
    { value: 'ppf', label: 'Paint Protection Film' },
    { value: 'ceramic', label: 'Ceramic Coating' },
    { value: 'tint', label: 'Window Tinting' },
    { value: 'wrap', label: 'Vehicle Wrap' },
    { value: 'detailing', label: 'Auto Detailing' },
    { value: 'other', label: 'Other' }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectOption = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
    setIsDropdownOpen(false);
  };

  const selectedOption = inquiryOptions.find(opt => opt.value === formData.inquiryType) || inquiryOptions[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Map inquiryType to projectType for better API compatibility
      const projectTypeMap: Record<string, string> = {
        'general': 'General Inquiry',
        'quote': 'Request a Quote',
        'ppf': 'Paint Protection Film',
        'ceramic': 'Ceramic Coating',
        'tint': 'Window Tinting',
        'wrap': 'Vehicle Wrap',
        'detailing': 'Auto Detailing',
        'other': 'Other'
      };

      // Prepare submission data
      const submissionData: Record<string, any> = {
        name: formData.name,
        email: formData.email,
        clientId: 'RL-WAWTG568',
        projectType: projectTypeMap[formData.inquiryType] || formData.inquiryType,
        inquiryType: formData.inquiryType,
      };

      // Add optional fields if they have values
      if (formData.phone) {
        submissionData.phone = formData.phone;
      }
      if (formData.message) {
        submissionData.message = formData.message;
      }

      // Submit to RenoLens API
      const response = await fetch('https://www.renolens.com/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Server error: ${response.status}`);
      }

      // Success
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'general',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 px-4 md:px-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full opacity-5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-blue-900 font-bold tracking-wider text-sm uppercase">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-5">
            Let's Talk About Your Vehicle
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have questions? Need a quote? Our auto protection experts are here to help you protect your investment with premium services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Reach out to us through any of these channels. We're here to help you every step of the way.
              </p>

              <div className="space-y-6">
                <a href="tel:9706186183" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md" style={{ backgroundColor: '#18AEE4' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Phone</h4>
                    <p className="text-gray-700 font-semibold text-lg">(970) 618-6183</p>
                    <p className="text-sm text-gray-500 mt-1">Call for Free Quote</p>
                  </div>
                </a>

                <a href="mailto:eugene@splashmobiledetail.com" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md flex-shrink-0" style={{ backgroundColor: '#18AEE4' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Email</h4>
                    <p className="text-gray-700 font-semibold break-words text-sm sm:text-base">eugene@splashmobiledetail.com</p>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-start p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                  <div className="p-4 rounded-xl mr-4 group-hover:scale-110 transition-transform shadow-md" style={{ backgroundColor: '#18AEE4' }}>
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-900 transition-colors">Service Area</h4>
                    <p className="text-gray-700 font-semibold">Denver Metro Area</p>
                    <p className="text-gray-700 font-semibold">Mobile Detailing Services</p>
                    <p className="text-sm text-blue-900 mt-1 font-semibold group-hover:underline">
                      Contact Us →
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 focus:bg-white"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-900 mb-2.5">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="hidden"
                    name="inquiryType"
                    value={formData.inquiryType}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all bg-gray-50 hover:bg-white font-medium text-left flex items-center justify-between group"
                  >
                    <span className={formData.inquiryType ? 'text-gray-900' : 'text-gray-400'}>
                      {selectedOption.label}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                        isDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-xl overflow-hidden">
                      {inquiryOptions.map((option) => (
                        <button
                          key={option.value}
                          type="button"
                          onClick={() => handleSelectOption(option.value)}
                          className={`w-full px-5 py-3.5 text-left hover:bg-blue-50 transition-colors ${
                            formData.inquiryType === option.value
                              ? 'bg-blue-50 text-blue-900 font-semibold'
                              : 'text-gray-900'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-xl px-5 py-3.5 focus:outline-none focus:border-blue-900 focus:ring-4 focus:ring-blue-900 focus:ring-opacity-10 transition-all resize-none bg-gray-50 focus:bg-white"
                  placeholder="Tell us about your vehicle, the services you're interested in, or any questions you have..."
                ></textarea>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 font-medium">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-red-800 font-medium mb-1">Error submitting form</p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed" style={{ backgroundColor: '#18AEE4' }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Store Hours & Location Section - Only show on full Contact page */}
        {!simplified && (
          <>
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <Clock className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Shop Hours</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-3 mb-4">
                <p className="font-semibold text-blue-900">Available</p>
                <p className="text-gray-700">By Appointment</p>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-semibold text-gray-900">Monday - Sunday</span>
                <span className="text-gray-600">By Appointment</span>
              </div>
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 italic">We work around your schedule. Call for availability.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-50 p-3 rounded-xl mr-4">
                <MapPin className="w-6 h-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Service Area</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 mb-2">We Serve</p>
                <p className="text-gray-900 font-semibold">Denver, Colorado</p>
                <p className="text-gray-900 font-semibold">and Surrounding Areas</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-4">
                  We provide professional auto detailing and protection services for all vehicle types. Contact us to discuss your needs.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

                      </>
        )}

      </div>
    </section>
  );
};

export default Contact;

