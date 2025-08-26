
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl flex flex-col md:flex-row items-center justify-between bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 hover:border-[#00ADB5]/30 transition-all duration-300">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h3 className="text-lg sm:text-xl font-medium mb-1">Ready to start a project?</h3>
        <p className="text-deekshant-gray text-sm sm:text-base">Let's discuss your ideas and make them reality</p>
      </div>
      <a
        href="https://wa.me/919520735410"
        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-[#00ADB5] text-white rounded-full flex items-center hover:bg-[#00ADB5]/90 hover:shadow-lg hover:shadow-[#00ADB5]/20 transition-all duration-300 transform hover:translate-y-[-2px] group text-sm sm:text-base"
      >
        <span>Start a conversation</span>
        <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default CallToAction;
