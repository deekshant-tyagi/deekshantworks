
import React from 'react';
import { Mail } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 space-y-6">
      <h3 className="text-2xl font-medium">Let's connect</h3>
      <p className="text-deekshant-gray">Have a project in mind or just want to chat? Feel free to reach out.</p>
      
      <div className="flex items-center group transition-all duration-300 hover:translate-x-1">
        <Mail className="w-5 h-5 mr-3 text-[#00ADB5] group-hover:scale-110 transition-transform duration-300" />
        <a 
          href="mailto:deekshant.code@outlook.com" 
          className="text-lg group-hover:text-[#00ADB5] transition-all duration-300"
        >
          deekshant.code@outlook.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
