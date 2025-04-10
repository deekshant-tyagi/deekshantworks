
import React, { useState } from 'react';

interface ProjectItemProps {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, category, imageUrl, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <a 
      href={link} 
      className="block project-item cursor-hover"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
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
        <div className="project-info">
          <h3 className="text-xl font-light">{title}</h3>
          <p className="text-sm text-ayush-gray">{category}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
