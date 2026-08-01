import React from 'react';
import { educationData } from '../config';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="section-padding relative z-10 bg-gradient-to-b from-transparent via-space-blue/20 to-transparent">
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
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg">Academic Background & Qualifications</p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="glass-effect p-6 md:p-8 rounded-xl hover:glow-effect transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-cyber-cyan to-cyber-purple rounded-full flex items-center justify-center">
                    <FaGraduationCap className="text-2xl md:text-3xl text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-cyber-cyan mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg md:text-xl text-gray-300">{edu.field}</p>
                    </div>
                    <div className="flex items-center gap-2 text-cyber-gold font-semibold mt-2 md:mt-0">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm md:text-base">{edu.startDate} - {edu.endDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-400 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">{edu.institution}</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyber-purple flex-shrink-0" />
                      <span className="text-sm md:text-base">{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-cyber-gold font-semibold text-sm md:text-base">
                      <FaStar /> Achievements:
                    </div>
                    <ul className="space-y-1 ml-6">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm md:text-base flex items-start">
                          <span className="text-cyber-cyan mr-2">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;