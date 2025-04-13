
import React, { useRef, useEffect, useState } from 'react';

// This is the additional tools section to be displayed 
const AlternateToolsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
          setIsVisible(true);
        }
      });
    }, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const programmingTools = [
    { name: "Data Structures", icon: "🔄", color: "text-yellow-400" },
    { name: "Algorithms", icon: "⚙️", color: "text-blue-400" },
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "Express.js", icon: "🚂", color: "text-gray-400" },
    { name: "React.js", icon: "⚛️", color: "text-blue-400" },
    { name: "Node.js", icon: "📦", color: "text-green-600" },
    { name: "LeetCode", icon: "🧩", color: "text-yellow-500" },
    { name: "System Design", icon: "🏗️", color: "text-purple-500" }
  ];

  const webTools = [
    { name: "REST APIs", icon: "🔌", color: "text-blue-500" },
    { name: "GraphQL", icon: "📊", color: "text-pink-500" },
    { name: "TypeScript", icon: "TS", color: "text-blue-400" },
    { name: "Redux", icon: "🔄", color: "text-purple-500" },
    { name: "AWS", icon: "☁️", color: "text-yellow-500" },
    { name: "Firebase", icon: "🔥", color: "text-yellow-500" },
    { name: "Jest", icon: "🧪", color: "text-green-500" },
    { name: "Git/GitHub", icon: "🐙", color: "text-gray-400" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-ayush-black">
      <div className={`container mx-auto px-4 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-8 py-[2px] text-center">My <span className="zigzag-underline">Skills</span></h2>
          
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-gray-800/80 mb-8">
            <h3 className="text-xl mb-6 text-center md:text-left font-light"><span className="zigzag-underline">DSA</span> & <span className="zigzag-underline">MERN</span> Skills</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {programmingTools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/30 hover:border-ayush-teal/50 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <span className={`text-2xl mb-2 ${tool.color}`}>{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-xl backdrop-blur-sm border border-gray-800/80">
            <h3 className="text-xl mb-6 text-center md:text-left font-light">Frontend & Backend <span className="zigzag-underline">Technologies</span></h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {webTools.map((tool, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/30 p-4 rounded-lg border border-gray-700/30 hover:border-ayush-teal/50 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <span className={`text-2xl mb-2 ${tool.color}`}>{tool.icon}</span>
                  <span>{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlternateToolsSection;
