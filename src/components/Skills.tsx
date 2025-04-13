
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Server, BrainCircuit } from 'lucide-react';

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const skills = [
    {
      category: "Data Structures & Algorithms",
      icon: <BrainCircuit className="w-6 h-6 text-[#00ADB5]" />,
      items: ["Array Manipulation", "Hash Tables", "Graph Algorithms", "Dynamic Programming", "Tree Traversals", "Divide and Conquer"]
    },
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6 text-[#00ADB5]" />,
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "JavaScript ES6+"]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6 text-[#00ADB5]" />,
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Authentication", "Middleware"]
    },
    {
      category: "Database Management",
      icon: <Database className="w-6 h-6 text-[#00ADB5]" />,
      items: ["MongoDB", "MySQL", "Firebase", "Redis", "Data Modeling", "Query Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-ayush-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-light text-center mb-12">My <span className="curly-underline">Skills</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/30 rounded-xl p-6 hover:border-[#00ADB5]/20 transition-all duration-300"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#00ADB5]/10 p-3 rounded-lg mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-medium">{skill.category}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  {skill.items.map((item, i) => (
                    <div key={i} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00ADB5] mr-2"></div>
                      <p className="text-ayush-gray">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gray-900/50 border border-gray-800/30 rounded-full">
              <span className="text-ayush-gray">Always learning new technologies</span>
              <div className="ml-3 w-2 h-2 rounded-full bg-[#00ADB5] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
