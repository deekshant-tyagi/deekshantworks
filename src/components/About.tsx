
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
          
          <div className="bg-ayush-black/30 p-8 rounded-lg backdrop-blur-sm border border-gray-800 max-w-3xl mx-auto">
            <p className="text-ayush-gray mb-6 text-center">
              Hi, I'm <span className="zigzag-underline">Ayush</span>, a passionate digital designer and developer with expertise in <span className="zigzag-underline">DSA</span> and the <span className="zigzag-underline">MERN stack</span>.
            </p>
            <p className="text-ayush-gray mb-6 text-center">
              With a strong foundation in <span className="zigzag-underline">Data Structures and Algorithms</span>, I create efficient and optimized solutions while leveraging my full-stack development skills with MongoDB, Express, React, and Node.js.
            </p>
            <p className="text-ayush-gray text-center">
              I specialize in <span className="zigzag-underline">minimalist design</span> principles and building scalable web applications that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
