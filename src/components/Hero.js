import React from 'react';
import { portfolioConfig } from '../config';
import { FaCode, FaGamepad, FaBrain, FaRocket } from 'react-icons/fa';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-4 gradient-text animate-float tracking-wide">
          {portfolioConfig.name}
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white/90">
          {portfolioConfig.title}
        </h2>
        
        {/* Subtitle */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
          <div className="flex items-center gap-2 glass-effect px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base">
            <FaGamepad className="text-cyber-cyan" />
            <span>{portfolioConfig.skills[0]}</span>
          </div>
          <div className="flex items-center gap-2 glass-effect px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base">
            <FaCode className="text-cyber-purple" />
            <span>{portfolioConfig.skills[1]}</span>
          </div>
          <div className="flex items-center gap-2 glass-effect px-3 py-2 sm:px-4 rounded-full text-sm sm:text-base">
            <FaBrain className="text-cyber-gold" />
            <span>{portfolioConfig.skills[2]}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto px-2">
          {portfolioConfig.tagline}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <button
            onClick={scrollToContact}
            className="btn-primary px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg flex items-center justify-center gap-2"
            data-testid="cta-contact-button"
          >
            <FaRocket />
            Let's Work Together
          </button>
          <a
            href="#projects"
            className="glass-effect px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:glow-effect transition-all text-center"
            data-testid="view-projects-button"
          >
            View Projects
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-cyan rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-cyan rounded-full mt-2 animate-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;