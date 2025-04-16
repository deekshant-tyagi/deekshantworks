
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-ayush-black border-t border-gray-800/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} <span className="text-[#00ADB5]">DEEKSHANT</span>WORKS</p>
          </div>
          
          <div className="text-sm text-ayush-gray">
            <p>Designed & Developed with precision</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
