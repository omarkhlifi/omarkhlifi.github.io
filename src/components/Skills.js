import React from 'react';
import { FaReact, FaUnity, FaBrain, FaVrCardboard, FaVideo, FaProjectDiagram } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: '3D Game Development', icon: <FaUnity />, level: 97, color: 'cyber-cyan' },
    { name: 'VR Specialist', icon: <FaVrCardboard />, level: 93, color: 'cyber-cyan' },
    { name: 'Generative AI (Image, Video & 3D Modeling)', icon: <FaVideo />, level: 92, color: 'cyber-cyan' },
    { name: 'AI Integration & Prompt Engineering', icon: <FaBrain />, level: 91, color: 'cyber-cyan' },
    { name: 'IT Management & Strategy', icon: <FaProjectDiagram />, level: 90, color: 'cyber-cyan' },
    { name: 'Full Stack Web Dev using AI', icon: <FaReact />, level: 77, color: 'cyber-cyan' }
  ];

  return (
    <section id="skills" className="section-padding relative z-10 bg-gradient-to-b from-transparent via-space-blue/20 to-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg">Technical Proficiencies & Core Competencies</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-effect p-4 md:p-6 rounded-lg hover:glow-effect transition-all"
              data-testid={`skill-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className={`text-2xl md:text-3xl text-${skill.color}`}>{skill.icon}</div>
                  <span className="text-base md:text-lg font-semibold">{skill.name}</span>
                </div>
                <span className={`text-${skill.color} font-bold text-sm md:text-base`}>{skill.level}%</span>
              </div>
              <div className="w-full bg-space-dark rounded-full h-2 md:h-3 overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-${skill.color} to-${skill.color} transition-all duration-1000 rounded-full`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;