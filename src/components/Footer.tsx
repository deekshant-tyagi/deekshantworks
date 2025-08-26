
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 bg-deekshant-black border-t border-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-3 md:mb-0">
            <p className="text-xs sm:text-sm text-deekshant-gray">© {currentYear} <span className="text-[#00ADB5] wavy-underline">DEEKSHANTWORKS</span></p>
          </div>

          <div className="text-xs sm:text-sm text-deekshant-gray">
            <p>Designed & Developed with precision.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
