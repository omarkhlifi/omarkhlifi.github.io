import React from 'react';
import { experienceData } from '../config';
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative z-10 bg-gradient-to-b from-transparent via-space-blue/20 to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg">Professional Journey & Career Highlights</p>
        </motion.div>

        {/* Certificate Notice */}
        <motion.div
          className="mb-8 md:mb-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-effect px-6 py-3 rounded-full inline-flex items-center gap-2 border border-cyber-gold/30">
            <span className="text-cyber-gold text-lg">📜</span>
            <span className="text-gray-300 text-sm md:text-base">
              <span className="text-cyber-gold font-semibold">Experience Certificate</span> available upon request
            </span>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line (hidden on mobile) */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-cyan via-cyber-purple to-cyber-gold"></div>

          {/* Experience Items */}
          <div className="space-y-8 md:space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Dot (hidden on mobile) */}
                <div className="hidden md:block absolute left-6 top-8 w-5 h-5 bg-cyber-cyan rounded-full border-4 border-space-dark z-10"></div>

                {/* Content */}
                <div className="md:ml-20">
                  <div className="glass-effect p-6 md:p-8 rounded-xl hover:glow-effect transition-all">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="mb-4 lg:mb-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-2">
                          {exp.position}
                        </h3>
                        <p className="text-lg md:text-xl text-white font-semibold flex items-center gap-2 flex-wrap">
                          {exp.company}
                          {exp.current && (
                            <span className="text-xs bg-cyber-gold text-black px-3 py-1 rounded-full font-bold">
                              CURRENT
                            </span>
                          )}
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-400">
                          <FaCalendarAlt className="text-cyber-gold flex-shrink-0" />
                          <span>{exp.startDate} - {exp.endDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Location & Type */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-cyber-purple flex-shrink-0" />
                        <span className="text-sm md:text-base">{exp.location}</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <div className="flex items-center gap-2">
                        <FaBriefcase className="text-cyber-cyan flex-shrink-0" />
                        <span className="text-sm md:text-base">{exp.type}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm md:text-base">
                        <FaCheckCircle className="text-cyber-gold" />
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2 ml-6">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-gray-300 text-sm md:text-base flex items-start">
                            <span className="text-cyber-cyan mr-2 flex-shrink-0">▹</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 text-sm md:text-base">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs md:text-sm bg-space-dark px-3 py-1 rounded-full border border-cyber-cyan/30 text-cyber-cyan"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
