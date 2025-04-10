
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-ayush-gray/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} AYUSHWORKS. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-ayush-gray hover:text-ayush-white transition-colors cursor-hover nav-item">
              Instagram
            </a>
            <a href="#" className="text-sm text-ayush-gray hover:text-ayush-white transition-colors cursor-hover nav-item">
              Twitter
            </a>
            <a href="#" className="text-sm text-ayush-gray hover:text-ayush-white transition-colors cursor-hover nav-item">
              LinkedIn
            </a>
            <a href="#" className="text-sm text-ayush-gray hover:text-ayush-white transition-colors cursor-hover nav-item">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
