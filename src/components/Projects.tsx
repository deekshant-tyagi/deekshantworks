
import React, { useEffect, useRef } from 'react';
import ProjectItem from './ProjectItem';

const projectsData = [
  {
    id: 1,
    title: 'Minimal Website',
    category: 'Web Design',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Branding',
    imageUrl: 'https://images.unsplash.com/photo-1634942537034-a3dffedcd539?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
    title: 'Mobile Application',
    category: 'UI/UX Design',
    imageUrl: 'https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 4,
    title: 'Photography Collection',
    category: 'Photography',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 5,
    title: 'E-commerce Platform',
    category: 'Web Development',
    imageUrl: 'https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 6,
    title: 'Product Design',
    category: 'Industrial Design',
    imageUrl: 'https://images.unsplash.com/photo-1511375617235-27d9926fe2d3?q=80&w=2000&auto=format&fit=crop',
    link: '#'
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            entry.target.classList.add('animate-fade-in');
          }
          if (entry.target === projectsRef.current) {
            entry.target.classList.add('animate-slide-up');
          }
        }
      });
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (projectsRef.current) observer.unobserve(projectsRef.current);
    };
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-ayush-black" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Selected <span className="curly-underline">Work</span>
        </h2>
        <div className="mb-10 w-32">
          <svg viewBox="0 0 120 6" className="w-full">
            <path d="M0,3 Q15,0 30,3 T60,3 T90,3 T120,3" fill="none" stroke="#00ADB5" strokeWidth="1.5" />
          </svg>
        </div>
        
        <div 
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
        >
          {projectsData.map(project => (
            <ProjectItem
              key={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
