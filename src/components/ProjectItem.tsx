
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectItemProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  liveLink: string;
  repoLink: string;
  technologies: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  description, 
  category, 
  imageUrl, 
  liveLink, 
  repoLink,
  technologies 
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50 hover:border-ayush-teal/50 transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-ayush-black">
            <div className="w-6 h-6 border-2 border-ayush-gray border-t-ayush-white rounded-full animate-spin" />
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute top-4 right-4 bg-ayush-black/80 rounded-full px-3 py-1 text-xs font-medium">
          {category}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 group-hover:text-ayush-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-xs px-2 py-1 rounded-full bg-gray-800/70 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a 
            href={liveLink} 
            className="flex items-center space-x-2 text-sm font-medium text-ayush-teal hover:text-white transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
          <a 
            href={repoLink} 
            className="flex items-center space-x-2 text-sm font-medium text-ayush-teal hover:text-white transition-colors"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Github size={16} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
