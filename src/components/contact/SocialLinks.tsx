
import React from 'react';
import { ExternalLink, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; name: string }> = ({ href, icon, name }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex items-center p-3 bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-xl hover:bg-[#00ADB5]/10 hover:border-[#00ADB5]/30 transition-all duration-300 transform hover:translate-y-[-2px] group"
  >
    {icon}
    <span>{name}</span>
    <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 space-y-6">
      <h3 className="text-2xl font-medium">On the web</h3>
      <div className="grid grid-cols-2 gap-4">
        <SocialLink 
          href="https://github.com" 
          icon={<Github className="w-5 h-5 mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Github"
        />
        <SocialLink 
          href="https://linkedin.com" 
          icon={<Linkedin className="w-5 h-5 mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="LinkedIn"
        />
        <SocialLink 
          href="https://twitter.com" 
          icon={<Twitter className="w-5 h-5 mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Twitter"
        />
        <SocialLink 
          href="https://instagram.com" 
          icon={<Instagram className="w-5 h-5 mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Instagram"
        />
      </div>
    </div>
  );
};

export default SocialLinks;
