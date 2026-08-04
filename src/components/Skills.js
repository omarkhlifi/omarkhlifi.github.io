import React from 'react';
import { Bot, Code2, Cpu, Gamepad2, Sparkles } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      id: 'game-dev-vr',
      title: 'Game Development & VR',
      description: 'Engine-focused gameplay and immersive XR systems.',
      icon: <Gamepad2 size={18} />,
      iconClass: 'border-cyber-cyan/40 text-cyber-cyan',
      skills: [
        'Unity Engine (C#, Netcode)',
        'Unreal Engine 5',
        'VR Application Development & Maintenance',
        '3D & 2D Game Mechanics & Tool Kits'
      ]
    },
    {
      id: 'gen-ai-media',
      title: 'Generative AI & Media',
      description: 'AI-assisted creative workflows for modern digital production.',
      icon: <Sparkles size={18} />,
      iconClass: 'border-cyber-purple/40 text-cyber-purple',
      skills: [
        'AI Tool Integration & Prompt Engineering',
        'Generative AI (Image, Video & 3D Modeling)',
        'Digital Content Creation (Promotional Media & Audio)'
      ]
    },
    {
      id: 'ai-web-dev',
      title: 'AI-Powered Full Stack Web Dev',
      description: 'Scalable product delivery with AI-assisted development pipelines.',
      icon: <Cpu size={18} />,
      iconClass: 'border-cyber-gold/40 text-cyber-gold',
      skills: [
        'AI-Driven Web Development & Coding Assistants',
        'Full Stack Web Architecture (React, TypeScript, Tailwind CSS, Vite)',
        'Backend & Database Integration (Supabase, Firebase, REST APIs)',
        'Rapid AI Prototyping & Modern Web Deployment'
      ]
    }
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

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => (
            <article
              key={category.id}
              className="group rounded-2xl p-[1px] bg-white/10 hover:bg-cyber-cyan/40 transition-all duration-300"
              data-testid={`skill-category-${category.id}`}
            >
              <div className="glass-effect rounded-2xl h-full p-5 sm:p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.18)]">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-space-dark border ${category.iconClass}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-tight">{category.title}</h3>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-400 mb-5">
                  <Bot size={14} />
                  <span>{category.description}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-cyber-purple mb-3">
                  <Code2 size={14} />
                  <span>Core Skills</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={`${category.id}-${skill}`}
                      className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-space-dark border border-cyber-cyan/30 text-gray-200 transition-all duration-300 hover:border-cyber-cyan hover:text-cyber-cyan hover:shadow-[0_0_12px_rgba(0,240,255,0.35)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;