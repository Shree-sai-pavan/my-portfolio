import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectPortfolio from './components/ProjectPortfolio';
import TechnicalSkills from './components/TechnicalSkills';
import Process from './components/Process';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 font-['Inter',sans-serif]">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Navigation */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <ProjectPortfolio />
        <TechnicalSkills />
        <Process />
        <Experience />
        <Contact />
      </main>

      {/* AI Assistant */}
      <AIAssistant />

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2024 MÁVRÎK?SÁI Portfolio. All rights reserved.
            </div>
            <div className="text-white/70 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;