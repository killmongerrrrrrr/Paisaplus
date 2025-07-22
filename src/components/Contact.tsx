import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);

    try {
      // EmailJS configuration (you'll need to set these up)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'syed.sahil_bm24@praxis.ac.in'
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setShowThankYou(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Hide thank you message after 5 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 gradient-bg-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`space-y-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Get In <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to take control of your finances? Have questions about our services? 
              We'd love to hear from you and help you start your financial journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Service Question">Service Question</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* reCAPTCHA Placeholder */}
                {/* Removed reCAPTCHA UI and placeholder */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-600">syed.sahil_bm24@praxis.ac.in</p>
                      <p className="text-gray-600">hello@paisaplus.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-600">+91 XXX XXX XXXX</p>
                      <p className="text-gray-500 text-sm">Mon-Fri, 10 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Visit Us</h4>
                      <p className="text-gray-600">Mumbai, India</p>
                      <p className="text-gray-500 text-sm">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Questions?</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-700">
                    <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                  </p>
                  <p className="text-gray-700">
                    <strong>Free Consultation:</strong> Yes! Your first consultation is completely free.
                  </p>
                  <p className="text-gray-700">
                    <strong>Service Areas:</strong> We serve customers across India with online support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center space-y-4 animate-scale-in">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
            <p className="text-gray-600 leading-relaxed">
              Your message has been sent successfully. We'll get back to you within 24 hours!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;