import React from 'react';
import { portfolioConfig } from '../config';

const About = () => {
  return (
    <section id="about" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
        </div>

        {/* Profile Picture and Name */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-cyber-cyan glow-effect">
              <img 
                src={portfolioConfig.profilePicture} 
                alt={portfolioConfig.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = '/ProfilePic.png';
                }}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-cyber-purple animate-ping opacity-20"></div>
          </div>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 text-center px-4">{portfolioConfig.name}</h3>
          <p className="text-lg md:text-xl text-cyber-cyan font-semibold text-center">{portfolioConfig.title}</p>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan">Who I Am</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {portfolioConfig.about.whoIAm}
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              {portfolioConfig.about.journey}
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-cyber-purple">What I Do</h3>
            <ul className="space-y-4 text-base md:text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-cyber-cyan text-xl md:text-2xl flex-shrink-0">▹</span>
                <span>Design and develop immersive 3D games and VR experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-purple text-xl md:text-2xl flex-shrink-0">▹</span>
                <span>Build scalable full-stack web applications using AI</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-gold text-xl md:text-2xl flex-shrink-0">▹</span>
                <span>Create generative AI solutions for images, videos, and 3D models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyber-cyan text-xl md:text-2xl flex-shrink-0">▹</span>
                <span>Provide IT management and strategic consulting</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;