
import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-ayush-gray/20 bg-ayush-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-ayush-gray">© {currentYear} <span className="text-ayush-white">D</span>. All rights reserved.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center text-ayush-gray hover:text-ayush-white transition-colors cursor-hover">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">hello@domain.com</span>
            </div>
            
            <div className="flex items-center text-ayush-gray hover:text-ayush-white transition-colors cursor-hover">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+91 1234567890</span>
            </div>
            
            <div className="flex items-center text-ayush-gray hover:text-ayush-white transition-colors cursor-hover">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Anywhere, Earth</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
