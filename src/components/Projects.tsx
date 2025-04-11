
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  liveLink: string;
  repoLink: string;
  technologies: string[];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Minimal Portfolio",
    description: "A clean, minimalist portfolio website built with React and TailwindCSS featuring smooth animations and responsive design.",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#",
    technologies: ["React", "TailwindCSS", "Framer Motion"]
  },
  {
    id: 2,
    title: "Brand Identity",
    description: "Complete brand identity design including logo, color palette, typography, and usage guidelines for a tech startup.",
    category: "Branding",
    imageUrl: "https://images.unsplash.com/photo-1634942537034-a3dffedcd539?q=80&w=2000&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#",
    technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"]
  },
  {
    id: 3,
    title: "Mobile Application",
    description: "A cross-platform mobile app for task management with cloud sync, notifications, and collaboration features.",
    category: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1596558450268-9c27524ba856?q=80&w=2000&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with product management, payment processing, and customer accounts.",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?q=80&w=2000&auto=format&fit=crop",
    liveLink: "#",
    repoLink: "#",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"]
  }
];

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projectsData.length);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.add('translate-y-0');
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      projectRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="work" className="py-16 md:py-24 bg-gradient-to-b from-ayush-black to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Selected <span className="wavy-underline">Work</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50 hover:border-ayush-teal/50 transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute top-4 right-4 bg-ayush-black/80 rounded-full px-3 py-1 text-xs font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2 group-hover:text-ayush-teal transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-1 rounded-full bg-gray-800/70 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink} 
                    className="flex items-center space-x-2 text-sm font-medium text-ayush-teal hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.repoLink} 
                    className="flex items-center space-x-2 text-sm font-medium text-ayush-teal hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
