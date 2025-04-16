
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="glass-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between bg-gray-900/20 backdrop-blur-sm border border-gray-800/50 hover:border-[#00ADB5]/30 transition-all duration-300">
      <div>
        <h3 className="text-xl font-medium mb-1">Ready to start a project?</h3>
        <p className="text-deekshant-gray">Let's discuss your ideas and make them reality</p>
      </div>
      <a 
        href="mailto:deekshant.code@outlook.com" 
        className="mt-4 md:mt-0 px-6 py-3 bg-[#00ADB5] text-white rounded-full flex items-center hover:bg-[#00ADB5]/90 hover:shadow-lg hover:shadow-[#00ADB5]/20 transition-all duration-300 transform hover:translate-y-[-2px] group"
      >
        <span>Start a conversation</span>
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
      </a>
    </div>
  );
};

export default CallToAction;
