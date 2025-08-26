
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
    { name: "Java", icon: "☕️", color: "text-blue-600" },
    { name: "CSS", icon: "🎨", color: "text-blue-500" },
    { name: "C", icon: "C", color: "text-teal-400" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "JavaScript", icon: "⚡", color: "text-yellow-500" },
    { name: "Framer Motion", icon: "FM", color: "text-blue-500" },
    { name: "GSAP", icon: "🌿", color: "text-green-500" },
  ];

  const tools2: Tool[] = [
    { name: "MongoDB", icon: "🍃", color: "text-white" },
    { name: "Node.js", icon: "N", color: "text-green-500" },
    { name: "AI", icon: "🤖", color: "text-pink-500" },
    { name: "Express", icon: "E", color: "text-white" },
    { name: "Github", icon: "🐈‍⬛", color: "text-white" },
    { name: "Render", icon: "R", color: "text-blue-500" },
    { name: "Netlify", icon: "🔗", color: "text-blue-500" },
    { name: "Postman", icon: "📮", color: "text-orange-500" },
    { name: "Bootstrap", icon: "B", color: "text-purple-500" },
    { name: "Redux", icon: "Rx", color: "text-pink-500" },
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
    <section id="tools" className="py-4 sm:py-12 md:py-16 bg-gradient-to-b from-gray-900 to-deekshant-black">
      <div className={`container mx-auto px-4 sm:px-6 md:px-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-light mb-6 sm:mb-8 text-left">
            Tools that I have <span className="wavy-underline">used</span>
          </h2>

          {/* Desktop scrolling tools */}
          <div className="hidden sm:block">
            {/* First row of scrolling tools - Seamless circular loop */}
            <div className="relative overflow-hidden mb-4 py-2">
              <div className="flex whitespace-nowrap animate-marquee-right">
                {[...tools, ...tools, ...tools].map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mx-1 sm:mx-2 border border-gray-700/50 hover:border-deekshant-teal/50 hover:bg-gray-800/90 hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <span className={`text-lg sm:text-2xl ${tool.color}`}>{tool.icon}</span>
                    <span className="text-sm sm:text-lg whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row of scrolling tools - Seamless circular loop */}
            <div className="relative overflow-hidden py-4 mb-8 sm:mb-12">
              <div className="flex whitespace-nowrap animate-marquee-left">
                {[...tools2, ...tools2, ...tools2].map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="inline-flex items-center space-x-2 bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 sm:py-3 mx-1 sm:mx-2 border border-gray-700/50 hover:border-deekshant-teal/50 hover:bg-gray-800/90 hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <span className={`text-lg sm:text-2xl ${tool.color}`}>{tool.icon}</span>
                    <span className="text-sm sm:text-lg whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile view - grid layout with specific tools */}
          <div className="sm:hidden">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { name: "Java", icon: "☕️", color: "text-blue-600" },
                { name: "JavaScript", icon: "⚡", color: "text-yellow-500" },
                { name: "Python", icon: "🐍", color: "text-yellow-500" },
                { name: "C", icon: "C", color: "text-teal-400" },
                { name: "React.js", icon: "⚛️", color: "text-blue-400" },
                { name: "Next.js", icon: "N", color: "text-white" },
                { name: "GSAP", icon: "🌿", color: "text-green-500" },
                { name: "Tailwind CSS", icon: "🌊", color: "text-teal-400" },
                { name: "Shadcn UI", icon: "S", color: "text-white" },
                { name: "Node.js", icon: "N", color: "text-green-500" },
                { name: "MongoDB", icon: "🍃", color: "text-white" },
                { name: "Express", icon: "E", color: "text-white" },
                { name: "GitHub", icon: "🐈‍⬛", color: "text-white" },
                { name: "Postman", icon: "📮", color: "text-orange-500" },
                { name: "Netlify", icon: "🔗", color: "text-blue-500" },
                { name: "Render", icon: "R", color: "text-blue-500" },
                { name: "Framer Motion", icon: "FM", color: "text-blue-500" },
                { name: "AI", icon: "🤖", color: "text-blue-500" },
              ].map((tool, idx) => (
                <div
                  key={`mobile-${tool.name}-${idx}`}
                  className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/30 flex items-center space-x-2 hover:scale-105 hover:border-deekshant-teal/50 transition-all duration-300 cursor-pointer"
                >
                  <span className={`text-lg ${tool.color}`}>{tool.icon}</span>
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub contribution grid - only shown on desktop */}
          {/* <div className="hidden md:block mb-4 bg-gray-900/50 p-6 rounded-xl backdrop-blur-sm border border-gray-800/80">
            <div className="flex justify-between mb-2">
              {contributionData.months.map((month, index) => (
                <span key={index} className="text-xs text-deekshant-gray">{month}</span>
              ))}
            </div>

            <div className="grid grid-cols-52 gap-1">
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
              <span className="text-xs text-deekshant-gray">{contributionData.total} contributions in the last year</span>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-deekshant-gray">Less</span>
                <div className="w-3 h-3 bg-gray-800 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-900 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-700 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-sm"></div>
                <div className="w-3 h-3 bg-teal-400 rounded-sm"></div>
                <span className="text-xs text-deekshant-gray">More</span>
              </div>
            </div>
          </div> */}


        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
