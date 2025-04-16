
import React, { useRef, useEffect, useState } from 'react';

interface Tool {
  name: string;
  icon: string;
  color: string;
}

const ToolsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [contributionData] = useState(generateRandomContributions());
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log("ToolsSection is now visible");
          setIsVisible(true);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Force visibility after a timeout as fallback
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearTimeout(timer);
    };
  }, []);
  
  const tools: Tool[] = [
    { name: "Next.js", icon: "N", color: "text-white" },
    { name: "React.js", icon: "⚛️", color: "text-blue-400" },
    { name: "TailwindCSS", icon: "🌊", color: "text-teal-400" },
    { name: "Bootstrap", icon: "B", color: "text-purple-500" },
    { name: "C++", icon: "C++", color: "text-blue-600" },
    { name: "CSS", icon: "CSS", color: "text-blue-500" },
    { name: "C", icon: "C", color: "text-teal-400" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "Solidity", icon: "S", color: "text-gray-400" }
  ];
  
  const tools2: Tool[] = [
    { name: "joDB", icon: "DB", color: "text-white" },
    { name: "postgreSQL", icon: "SQL", color: "text-blue-500" },
    { name: "Prisma", icon: "△", color: "text-teal-400" },
    { name: "Node.js", icon: "N", color: "text-green-500" },
    { name: "Firebase", icon: "🔥", color: "text-yellow-500" },
    { name: "AI", icon: "🤖", color: "text-pink-500" },
    { name: "Nginx", icon: "N", color: "text-green-600" },
    { name: "Express", icon: "E", color: "text-white" }
  ];
  
  function generateRandomContributions() {
    const months = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    let contributions = [];
    for (let m = 0; m < months.length; m++) {
      for (let week = 0; week < 4; week++) {
        for (let day = 0; day < 7; day++) {
          // Create a random intensity level (0 to 4)
          const intensity = Math.floor(Math.random() * 5);
          contributions.push({
            intensity
          });
        }
      }
    }
    return {
      months,
      contributions,
      total: 1383
    };
  }

  return (
    <section id="tools" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-ayush-black overflow-visible">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-left">
            Tools that I have <span className="wavy-underline">used</span>
          </h2>
          
          {/* First row of scrolling tools */}
          <div className="overflow-visible mb-4 py-2">
            <div className="flex flex-nowrap space-x-4 animate-marquee-right pb-2 overflow-visible">
              {[...tools, ...tools].map((tool, index) => (
                <div 
                  key={`${tool.name}-${index}`} 
                  className="flex-shrink-0 flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50 hover:border-ayush-teal/50 hover:bg-gray-800/90 transition-all duration-300"
                >
                  <span className={`text-2xl ${tool.color}`}>{tool.icon}</span>
                  <span className="text-lg whitespace-nowrap">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Second row of scrolling tools */}
          <div className="overflow-visible py-4 mb-12">
            <div className="flex flex-nowrap space-x-4 animate-marquee-left pb-2 overflow-visible">
              {[...tools2, ...tools2].map((tool, index) => (
                <div 
                  key={`${tool.name}-${index}`} 
                  className="flex-shrink-0 flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700/50 hover:border-ayush-teal/50 hover:bg-gray-800/90 transition-all duration-300"
                >
                  <span className={`text-2xl ${tool.color}`}>{tool.icon}</span>
                  <span className="text-lg whitespace-nowrap">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* GitHub contribution grid - only shown on desktop */}
          <div className="hidden md:block mb-4 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800/80">
            <div className="flex justify-between mb-2">
              {contributionData.months.map((month, index) => (
                <span key={index} className="text-xs text-ayush-gray">{month}</span>
              ))}
            </div>
            
            <div className="grid grid-cols-[repeat(52,1fr)] gap-1">
              {contributionData.contributions.map((day, i) => (
                <div 
                  key={i} 
                  className={`w-3 h-3 rounded-sm ${
                    day.intensity === 0 ? 'bg-gray-800' : 
                    day.intensity === 1 ? 'bg-teal-900' : 
                    day.intensity === 2 ? 'bg-teal-700' : 
                    day.intensity === 3 ? 'bg-teal-500' : 'bg-teal-400'
                  }`} 
                  title={`${day.intensity} contributions`} 
                />
              ))}
            </div>
            
            <div className="flex justify-between mt-2">
              <span className="text-xs text-ayush-gray">{contributionData.total} contributions in the last year</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-ayush-gray">Less</span>
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-400 rounded-sm"></div>
                <span className="text-xs text-ayush-gray">More</span>
              </div>
            </div>
          </div>
          
          {/* Mobile view - simplified tools display */}
          <div className="md:hidden">
            <div className="grid grid-cols-2 gap-3 mt-4">
              {tools.slice(0, 6).map((tool, idx) => (
                <div 
                  key={`mobile-${tool.name}-${idx}`}
                  className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/30 flex items-center space-x-2"
                >
                  <span className={`text-xl ${tool.color}`}>{tool.icon}</span>
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
