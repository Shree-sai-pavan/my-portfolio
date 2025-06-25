import React from 'react';
import { processSteps } from '../utils/constants';
import * as Icons from 'lucide-react';

const Process: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size?: number; className?: string }>;
    return IconComponent ? <IconComponent size={32} className="text-white" /> : null;
  };

  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Development <span className="text-purple-300">Process</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            My systematic approach to engineering challenges ensures reliable, 
            innovative, and well-documented solutions from concept to completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div 
              key={step.id}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-white/20 group-hover:border-white/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>

              {/* Icon */}
              <div className="bg-white/10 rounded-2xl p-4 w-fit mb-6 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                {getIcon(step.icon)}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Duration */}
              <div className="text-sm text-purple-300 font-medium">
                Duration: {step.duration}
              </div>

              {/* Connecting Line (for larger screens) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-white/40 to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why This Process Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300 mb-2">95%</div>
              <div className="text-white/70">Project Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">30%</div>
              <div className="text-white/70">Faster Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
              <div className="text-white/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;