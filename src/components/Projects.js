import React from 'react';
import { projectsData } from '../projectsData';
import { FaGamepad, FaReact, FaBrain, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  const getIcon = (category) => {
    if (category.includes('Game')) return <FaGamepad />;
    if (category.includes('AI')) return <FaBrain />;
    return <FaReact />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 gradient-text" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-gold mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">Showcasing my best work across game dev, web development, and AI</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-effect rounded-xl overflow-hidden group cursor-pointer"
              data-testid={`project-${project.id}`}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br from-${project.color}/20 to-space-dark flex items-center justify-center relative overflow-hidden`}>
                <div className={`text-6xl text-${project.color} group-hover:scale-125 transition-transform duration-500`}>
                  {getIcon(project.category)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-dark to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-full text-sm">
                  {project.year}
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className={`text-${project.color} text-sm font-semibold mb-2`}>
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyber-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{project.shortDescription}</p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-space-dark px-3 py-1 rounded-full border border-cyber-cyan/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs text-gray-500">+{project.tech.length - 3} more</span>
                  )}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4 items-center">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-cyber-cyan hover:text-white transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub /> GitHub
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyber-purple hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt /> Demo
                    </a>
                  )}
                  <span className="text-xs text-gray-500 ml-auto">{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;