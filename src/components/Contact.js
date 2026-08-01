import React, { useState } from 'react';
import { portfolioConfig } from '../config';
import { 
  FaEnvelope, 
  FaUser, 
  FaComment, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaRocket, 
  FaSpinner, 
  FaRedo 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Access the key from environment variables
    const apiKey = '05a9afe3-95ef-4812-aea6-9bced074ebf5';

    if (!apiKey) {
      console.error('Missing API Key! Ensure REACT_APP_WEB3FORMS_ACCESS_KEY is set in .env');
      setErrorMessage('Configuration error: Missing API access key.');
      setIsSubmitting(false);
      return;
    }

    const data = new FormData(e.target);
    data.append('access_key', apiKey);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const resData = await response.json();

      if (resData.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(resData.message || 'Transmission failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', message: '' });
    setIsSuccess(false);
  };

  return (
    <section id="contact" className="section-padding relative z-10 bg-gradient-to-b from-transparent via-space-blue/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">Have a project in mind? Let's create something amazing together!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Main Form / Celebration Box */}
          <div className="glass-effect p-8 rounded-xl relative overflow-hidden flex flex-col justify-center min-h-[500px]">
            {isSuccess ? (
              /* --- CELEBRATION VIEW --- */
              <div className="relative z-10 text-center py-6 animate-fade-in flex flex-col items-center justify-center h-full">
                <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center">
                  <div className="w-48 h-48 bg-cyber-cyan/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="w-32 h-32 bg-cyber-purple/30 rounded-full blur-2xl animate-ping opacity-25"></div>
                </div>

                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-tr from-cyber-cyan to-cyber-purple rounded-full flex items-center justify-center shadow-lg shadow-cyber-cyan/50 animate-bounce">
                    <FaRocket className="text-4xl text-white -rotate-45" />
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-gold to-cyber-purple">
                  Message Transmitted! 🚀
                </h3>

                <p className="text-gray-200 text-lg max-w-md mx-auto leading-relaxed mb-2">
                  Thanks for reaching out, <span className="font-bold text-cyber-cyan">{formData.name}</span>!
                </p>

                <p className="text-gray-400 text-sm max-w-sm mx-auto mb-8">
                  Your message was sent directly to my inbox. I’ll review it and get back to you faster than lightspeed!
                </p>

                <button
                  onClick={handleReset}
                  className="btn-primary px-6 py-3 rounded-lg font-semibold text-sm flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  <FaRedo /> Send Another Message
                </button>
              </div>
            ) : (
              /* --- CONTACT FORM --- */
              <>
                <h3 className="text-3xl font-bold mb-6 text-cyber-cyan">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Your Name</label>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-cyan" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-dark border border-cyber-cyan/30 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-cyber-cyan transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Your Email</label>
                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyber-purple" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-space-dark border border-cyber-purple/30 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-cyber-purple transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Your Message</label>
                    <div className="relative">
                      <FaComment className="absolute left-4 top-6 text-cyber-gold" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full bg-space-dark border border-cyber-gold/30 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-cyber-gold transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                  </div>

                  {errorMessage && (
                    <p className="text-red-400 text-sm text-center font-medium bg-red-500/10 py-2 rounded border border-red-500/20">
                      {errorMessage}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" /> Beaming Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Social Links & Info Column */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-xl">
              <h3 className="text-3xl font-bold mb-6 text-cyber-purple">Connect With Me</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities.
                Let's build something extraordinary together!
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${portfolioConfig.contact.email}`} className="flex items-center gap-4 text-lg hover:text-cyber-cyan transition-colors group">
                  <div className="w-12 h-12 bg-cyber-cyan/20 rounded-full flex items-center justify-center group-hover:bg-cyber-cyan/30 transition-colors">
                    <FaEnvelope className="text-cyber-cyan" />
                  </div>
                  <span>{portfolioConfig.contact.email}</span>
                </a>
                
                <a href={portfolioConfig.contact.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-cyber-purple transition-colors group">
                  <div className="w-12 h-12 bg-cyber-purple/20 rounded-full flex items-center justify-center group-hover:bg-cyber-purple/30 transition-colors">
                    <FaGithub className="text-cyber-purple" />
                  </div>
                  <span>GitHub Profile</span>
                </a>
                
                <a href={portfolioConfig.contact.linkedin} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-cyber-cyan transition-colors group">
                  <div className="w-12 h-12 bg-cyber-cyan/20 rounded-full flex items-center justify-center group-hover:bg-cyber-cyan/30 transition-colors">
                    <FaLinkedin className="text-cyber-cyan" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
                
                <a href={portfolioConfig.contact.youtube} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-cyber-gold transition-colors group">
                  <div className="w-12 h-12 bg-cyber-gold/20 rounded-full flex items-center justify-center group-hover:bg-cyber-gold/30 transition-colors">
                    <FaYoutube className="text-cyber-gold" />
                  </div>
                  <span>Youtube Channel</span>
                </a>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-4 text-cyber-gold">Quick Response</h4>
              <p className="text-gray-400">
                I typically respond within 24 hours. For urgent inquiries, feel free to reach out via social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;