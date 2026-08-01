import React from 'react';
import { certificationsData } from '../config';
import { FaCertificate, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-base md:text-lg">Professional Certifications & Credentials</p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="glass-effect p-6 rounded-xl hover:glow-effect transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Logo/Icon */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-5xl">{cert.logo}</div>
                <div className="flex items-center gap-2 text-cyber-gold text-sm">
                  <FaCalendarAlt />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Certificate Name */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-cyber-cyan group-hover:text-white transition-colors">
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="text-gray-400 mb-3 text-sm md:text-base flex items-center gap-2">
                <FaCertificate className="text-cyber-purple" />
                {cert.issuer}
              </p>

              {/* Credential ID */}
              <div className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                <FaIdCard />
                <span>ID: {cert.credentialId}</span>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-cyber-cyan/10 text-cyber-cyan px-3 py-1 rounded-full border border-cyber-cyan/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;