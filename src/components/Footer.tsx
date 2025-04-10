
import React from 'react';
import { Github, Linkedin, Instagram, Twitter, MessagesSquare } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-ayush-gray/20 bg-ayush-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} AYUSHWORKS. All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Github className="w-5 h-5 text-ayush-gray hover:text-ayush-white transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Linkedin className="w-5 h-5 text-ayush-gray hover:text-ayush-white transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Instagram className="w-5 h-5 text-ayush-gray hover:text-ayush-white transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <Twitter className="w-5 h-5 text-ayush-gray hover:text-ayush-white transition-colors" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="cursor-hover">
              <MessagesSquare className="w-5 h-5 text-ayush-gray hover:text-ayush-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
