import React, { Suspense } from 'react';
import './App.css';
import EnhancedScene3D from './components/EnhancedScene3D';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App bg-space-dark min-h-screen overflow-x-hidden">
      {/* 3D Background */}
      <Suspense fallback={
        <div className="fixed inset-0 bg-space-dark flex items-center justify-center text-white">
          <div className="text-center px-4">
            <div className="animate-spin rounded-full h-12 w-12 md:h-16 md:w-16 border-t-2 border-b-2 border-cyber-cyan mx-auto mb-4"></div>
            <p className="text-lg md:text-2xl">Loading 3D Experience...</p>
          </div>
        </div>
      }>
        <EnhancedScene3D />
      </Suspense>

      {/* Navigation */}
      <Navigation />

      {/* Main Content - Order: Home → About → Skills → Experience → Projects → Education → Certifications → Contact */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-space-dark border-t border-cyber-cyan/20 py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} OMAR KHLIFI. Crafted with{" "}
            <span className="text-cyber-cyan">React</span>,{" "}
            <span className="text-cyber-purple">Three.js</span> &{" "}
            <span className="text-cyber-gold">Passion</span>
          </p>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
