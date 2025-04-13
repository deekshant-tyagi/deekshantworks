
import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-ayush-gray/20 bg-ayush-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} AYUSHWORKS. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center text-sm text-ayush-gray px-3 py-1 rounded-full bg-gray-800/30 cursor-hover">
              <Heart className="w-3 h-3 text-[#00ADB5] mr-1" />
              <span>Made with passion</span>
            </span>
            
            <span className="inline-flex items-center text-sm text-ayush-gray px-3 py-1 rounded-full bg-gray-800/30 cursor-hover">
              <Code className="w-3 h-3 text-[#00ADB5] mr-1" />
              <span>Clean & elegant code</span>
            </span>
            
            <span className="inline-flex items-center text-sm text-ayush-gray px-3 py-1 rounded-full bg-gray-800/30 cursor-hover">
              <Sparkles className="w-3 h-3 text-[#00ADB5] mr-1" />
              <span>Designed to impress</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
