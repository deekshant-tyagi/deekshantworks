
import React, { useRef, useEffect } from 'react';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          const contentElement = entry.target.querySelector('.content-container');
          if (contentElement) contentElement.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-12 md:py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="content-container max-w-5xl mx-auto opacity-0">
          <h2 className="text-3xl font-light mb-6 text-center">About <span className="zigzag-underline">Me</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
            <div className="rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border-2 border-ayush-teal/30">
              <img 
                src="/lovable-uploads/1b938963-f509-4073-99b1-2edd19749366.png" 
                alt="Profile" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="bg-ayush-black/30 p-8 rounded-lg backdrop-blur-sm border border-gray-800">
              <p className="text-ayush-gray mb-6 text-center md:text-left">
                Hi, I'm <span className="zigzag-underline">Ayush</span>, a passionate digital designer and developer with a keen eye for detail and a love for creating beautiful, functional digital experiences.
              </p>
              <p className="text-ayush-gray mb-6 text-center md:text-left">
                With expertise in both <span className="zigzag-underline">design and development</span>, I bridge the gap between aesthetics and functionality, ensuring that every project not only looks great but also delivers an exceptional user experience.
              </p>
              <p className="text-ayush-gray text-center md:text-left">
                I specialize in <span className="zigzag-underline">minimalist design</span>, responsive layouts, and clean code. My approach involves understanding the unique needs of each project and crafting tailored solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
