
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-ayush-black border-t border-gray-800/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-3 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} <span className="text-[#00ADB5]">AYUSH</span>WORKS</p>
          </div>
          
          <div className="flex space-x-4 text-sm text-ayush-gray">
            <a href="#" className="hover:text-[#00ADB5] transition-colors">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#00ADB5] transition-colors">Terms</a>
            <span>•</span>
            <a href="#" className="hover:text-[#00ADB5] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
