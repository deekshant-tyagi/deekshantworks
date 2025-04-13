
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
            <div className="rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 border-2 border-ayush-teal/30 max-w-md mx-auto md:mx-0">
              <img 
                src="/lovable-uploads/1b938963-f509-4073-99b1-2edd19749366.png" 
                alt="Profile" 
                className="w-full h-auto object-cover"
                style={{ maxHeight: "350px" }}
              />
            </div>
            
            <div className="bg-ayush-black/30 p-8 rounded-lg backdrop-blur-sm border border-gray-800">
              <p className="text-ayush-gray mb-6 text-center md:text-left">
                Hi, I'm <span className="zigzag-underline">Ayush</span>, a passionate digital designer and developer with expertise in <span className="zigzag-underline">DSA</span> and the <span className="zigzag-underline">MERN stack</span>.
              </p>
              <p className="text-ayush-gray mb-6 text-center md:text-left">
                With a strong foundation in <span className="zigzag-underline">Data Structures and Algorithms</span>, I create efficient and optimized solutions while leveraging my full-stack development skills with MongoDB, Express, React, and Node.js.
              </p>
              <p className="text-ayush-gray text-center md:text-left">
                I specialize in <span className="zigzag-underline">minimalist design</span> principles and building scalable web applications that deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
