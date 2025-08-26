
import React from 'react';
import { Mail } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
      <h3 className="text-xl sm:text-2xl font-medium">Let's connect</h3>
      <p className="text-deekshant-gray text-sm sm:text-base">Have a project in mind or just want to chat? Feel free to reach out.</p>

      <div className="flex items-center group transition-all duration-300 hover:translate-x-1">
        <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#00ADB5] group-hover:scale-110 transition-transform duration-300 flex-shrink-0" />
        <a
          href="mailto:deekshanttyagii@gmail.com"
          className="text-base sm:text-lg group-hover:text-[#00ADB5] transition-all duration-300 break-all sm:break-normal"
        >
          deekshanttyagii@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
