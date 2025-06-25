import React from 'react';
import { skills } from '../utils/constants';
import { Code, Wrench, BarChart3, Users } from 'lucide-react';

const TechnicalSkills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Design & Modeling':
        return <Wrench className="text-purple-300" size={24} />;
      case 'Programming':
        return <Code className="text-blue-300" size={24} />;
      case 'Analysis Tools':
        return <BarChart3 className="text-green-300" size={24} />;
      case 'Project Management':
        return <Users className="text-orange-300" size={24} />;
      default:
        return <Code className="text-purple-300" size={24} />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Design & Modeling':
        return 'from-purple-500/20 to-purple-600/20';
      case 'Programming':
        return 'from-blue-500/20 to-blue-600/20';
      case 'Analysis Tools':
        return 'from-green-500/20 to-green-600/20';
      case 'Project Management':
        return 'from-orange-500/20 to-orange-600/20';
      default:
        return 'from-purple-500/20 to-purple-600/20';
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const SkillBar: React.FC<{ skill: typeof skills[0] }> = ({ skill }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{skill.name}</span>
        <span className="text-white/70 text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-purple-300">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit of engineering software, programming languages, 
            and methodologies honed through academic projects and practical experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div 
              key={category}
              className={`bg-gradient-to-br ${getCategoryColor(category)} backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300`}
            >
              <div className="flex items-center space-x-3 mb-6">
                {getCategoryIcon(category)}
                <h3 className="text-2xl font-bold text-white">{category}</h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <SkillBar key={index} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Engineering Fundamentals
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Data Structures and Algorithms',
              'Theory of Computation',
              'Object-Oriented Programming',
              'Database Management Systems',
              'Web Technologies ',
              'Artificial Intelligence ',
              'Machine Learning',
              'Embedded Systems & IoT'
            ].map((fundamental, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-white font-medium">{fundamental}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;