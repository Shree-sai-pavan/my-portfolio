import React, { useState } from 'react';
import { experiences } from '../utils/constants';
import { Calendar, MapPin, Award, Users, BookOpen, AlignCenterVertical as Certificate } from 'lucide-react';

const Experience: React.FC = () => {
  const [selectedType, setSelectedType] = useState<'all' | 'academic' | 'internship' | 'certification'>('all');
  
  const filteredExperiences = selectedType === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.type === selectedType);

  const getIcon = (type: string) => {
    switch (type) {
      case 'academic':
        return <BookOpen className="text-blue-300" size={20} />;
      case 'internship':
        return <Users className="text-green-300" size={20} />;
      case 'certification':
        return <Certificate className="text-purple-300" size={20} />;
      default:
        return <Award className="text-white" size={20} />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'academic':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'internship':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'certification':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-white/20 text-white border-white/30';
    }
  };

  const ExperienceCard: React.FC<{ experience: typeof experiences[0], index: number }> = ({ experience, index }) => (
    <div className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105">
      {/* Timeline Connector */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full"></div>
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getIcon(experience.type)}
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-white/70 font-medium">{experience.company}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(experience.type)}`}>
          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
        </span>
      </div>

      {/* Period */}
      <div className="flex items-center space-x-2 text-white/60 mb-4">
        <Calendar size={16} />
        <span className="text-sm">{experience.period}</span>
      </div>

      {/* Description */}
      <p className="text-white/80 mb-4 leading-relaxed">
        {experience.description}
      </p>

      {/* Achievements */}
      <div className="space-y-2">
        <h4 className="text-white font-semibold text-sm mb-2">Key Achievements:</h4>
        {experience.achievements.map((achievement, achIndex) => (
          <div key={achIndex} className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-white/70 text-sm">{achievement}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-purple-300">Achievements</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive overview of my academic projects, professional internships, 
            and certifications that demonstrate engineering expertise and growth.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'all', label: 'All Experience' },
            { key: 'academic', label: 'Academic Projects' },
            { key: 'internship', label: 'Internships' },
            { key: 'certification', label: 'Certifications' }
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedType(filter.key as any)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedType === filter.key
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white backdrop-blur-sm'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {filteredExperiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">4</div>
            <div className="text-white/70">Major Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">2</div>
            <div className="text-white/70">Internships</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">5</div>
            <div className="text-white/70">Certifications</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">3</div>
            <div className="text-white/70">Publications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;