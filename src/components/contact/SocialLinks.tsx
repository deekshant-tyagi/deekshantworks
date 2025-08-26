
import React from 'react';
import { ExternalLink, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; name: string }> = ({ href, icon, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-2.5 sm:p-3 bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-lg sm:rounded-xl hover:bg-[#00ADB5]/10 hover:border-[#00ADB5]/30 transition-all duration-300 transform hover:translate-y-[-2px] group cursor-hover"
  >
    {icon}
    <span className="text-sm sm:text-base">{name}</span>
    <ExternalLink className="w-3 h-3 ml-1 sm:ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  </a>
);

const SocialLinks: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-medium curly-underline">On the web</h3>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <SocialLink
          href="https://github.com/deekshant-tyagi"
          icon={<Github className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Github"
        />
        <SocialLink
          href="https://www.linkedin.com/in/deekshanttyagi"
          icon={<Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="LinkedIn"
        />
        <SocialLink
          href="https://twitter.com/_voiddotdev"
          icon={<Twitter className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Twitter"
        />
        <SocialLink
          href="https://instagram.com/_yashtyagiii"
          icon={<Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 group-hover:text-[#00ADB5] transition-colors duration-300" />}
          name="Instagram"
        />
      </div>
    </div>
  );
};

export default SocialLinks;
