
import React, { useState } from 'react';

interface ProjectItemProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, category, imageUrl, link }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={link} 
      className="block project-item cursor-hover group"
      target="_blank" 
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/20 rounded-lg shadow-lg transition-all duration-500">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-ayush-black">
            <div className="w-6 h-6 border-2 border-ayush-gray border-t-ayush-white rounded-full animate-spin" />
          </div>
        )}
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
          onLoad={() => setIsLoading(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ayush-black via-ayush-black/70 to-transparent opacity-0 transition-opacity duration-300 flex flex-col justify-end p-6 group-hover:opacity-100">
          <span className="text-sm text-[#00ADB5] mb-1 transform translate-y-4 opacity-0 transition-all duration-300 delay-100 group-hover:translate-y-0 group-hover:opacity-100">{category}</span>
          <h3 className="text-xl font-light transform translate-y-4 opacity-0 transition-all duration-300 delay-200 group-hover:translate-y-0 group-hover:opacity-100">{title}</h3>
          <span className="mt-2 inline-block text-xs text-ayush-gray border border-ayush-gray/30 px-3 py-1 rounded-full transform translate-y-4 opacity-0 transition-all duration-300 delay-300 group-hover:translate-y-0 group-hover:opacity-100">View Project</span>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
