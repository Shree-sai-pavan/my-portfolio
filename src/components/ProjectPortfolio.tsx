import React, { useState } from 'react';
import { projects } from '../utils/constants';
import { ExternalLink, Code, Award } from 'lucide-react';

const ProjectPortfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <ExternalLink className="text-white" size={16} />
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full">
            {project.category}
          </span>
          {project.metrics && (
            <div className="flex items-center space-x-1 text-green-300">
              <Award size={14} />
              <span className="text-xs font-medium">{project.metrics}</span>
            </div>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-md border border-white/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors duration-300 group/btn">
          <Code size={16} />
          <span className="text-sm font-medium">View Details</span>
          <ExternalLink className="group-hover/btn:translate-x-1 transition-transform duration-300" size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-purple-300">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my engineering projects that showcase problem-solving, innovation, 
            and technical expertise across various disciplines.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-purple-600 shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <button className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;