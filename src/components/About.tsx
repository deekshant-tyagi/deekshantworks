
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
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8 opacity-0">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-light mb-8 text-center">About Me</h2>
          <p className="text-ayush-gray mb-6 text-center md:text-left">
            Hi, I'm <span className="curly-underline">Ayush</span>, a passionate digital designer and developer with a keen eye for detail and a love for creating beautiful, functional digital experiences.
          </p>
          <p className="text-ayush-gray mb-6 text-center md:text-left">
            With expertise in both <span className="curly-underline">design and development</span>, I bridge the gap between aesthetics and functionality, ensuring that every project not only looks great but also delivers an exceptional user experience.
          </p>
          <p className="text-ayush-gray text-center md:text-left">
            I specialize in <span className="curly-underline">minimalist design</span>, responsive layouts, and clean code. My approach involves understanding the unique needs of each project and crafting tailored solutions that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
