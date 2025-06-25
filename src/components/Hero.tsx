import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, ChevronDown, Sparkles, Code, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    window.open('https://drive.google.com/uc?export=download&id=1gxh6x0vRdFT1dtudMH7uZiv8bb4KRXxU', '_blank');
    link.download = 'Shree_Sai_Pavan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-300/10 rounded-lg rotate-45 blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/5 rounded-lg rotate-12 blur-lg animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main Hero Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Creative Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/20 animate-fade-in-up">
              <Sparkles className="text-purple-300" size={16} />
              <span className="text-white/80 text-sm font-medium">Creative Full-Stack Developer</span>
            </div>

            {/* Main Headline with Staggered Animation */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Hi, I'm
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Shree <span className="animate-bounce inline-block"></span>Sai Pavan E
              </span>
            </h1>
            
            {/* Enhanced Bio */}
            <div className="space-y-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                Aspiring AI & Full-Stack Developer crafting innovative digital experiences
              </p>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
                Computer Science Engineering student at Presidency University, passionate about AI, IoT, 
                and building scalable web solutions that solve real-world problems.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                <Code className="text-purple-300 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-white/70 text-sm">React, Node.js, SQL, Javascript</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                <Zap className="text-blue-300 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-white/70 text-sm">Computer Vision, AI Tools, Python</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105">
                <Sparkles className="text-green-300 mx-auto mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">Innovation</h3>
                <p className="text-white/70 text-sm">Creative Problem Solving, Team Leadership</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <button
                onClick={scrollToProjects}
                className="group bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Explore My Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button
                onClick={handleResumeDownload}
                className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm transform hover:scale-105"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>  
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2 animate-count-up">3+</div>
                <div className="text-white/70">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2 animate-count-up">6+</div>
                <div className="text-white/70">Certifications Earned</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2 animate-count-up">2+</div>
                <div className="text-white/70">Years of Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/60" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;