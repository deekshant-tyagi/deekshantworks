
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
    title: "StudyNotion - EdTech Platform",
    description: "A comprehensive online education platform built with the MERN stack. Features include course creation, student enrollment, payment integration with Razorpay, video streaming, and instructor dashboards.",
    category: "MERN Stack",
    imageUrl: "/images/studyN.png",
    liveLink: "https://studyn.netlify.app/",
    repoLink: "https://github.com/deekshant-tyagi/StudyNotion",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Redux", "Razorpay", "Cloudinary", "JWT", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "DoodleVerse - Collaborative whiteboard app",
    description: "DoodleVerse is a collaborative whiteboard app built with the MERN stack and Socket.IO. It lets users draw, create, and brainstorm together in real-time, making teamwork interactive and fun.",
    category: "MERN Stack",
    imageUrl: "/images/doodleVerse.png",
    liveLink: "https://doodleverse.netlify.app/",
    repoLink: "https://github.com/deekshant-tyagi/DoodleVerse",
    technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.IO", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 3,
    title: "GaonLink",
    description: "Developed and deployed a responsive website GaonLink, showcasing its culture, history, and community resources.",
    category: "Web Application",
    imageUrl: "/images/teamBanwaripur.png",
    liveLink: "https://teambanwaripur.netlify.app/",
    repoLink: "https://github.com/deekshant-tyagi/teambanwaripur",
    technologies: ["Tailwind", "Material-UI" , "React"]
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A minimalist portfolio website built with Next.js and Tailwind CSS featuring smooth animations and responsive design.",
    category: "Web Development",
    imageUrl: "/images/portfolio.png",
    liveLink: "https://deekshantworks.netlify.app/",
    repoLink: "https://github.com/deekshant-tyagi/deekshantWorks",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
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
    <section id="work" className="py-4 sm:py-12 md:py-16 lg:py-24 bg-gradient-to-b from-deekshant-black to-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-2xl sm:text-3xl font-light mb-4 sm:mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Selected <span className="wavy-underline">Work</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[index] = el}
              className="group bg-gray-900/30 rounded-xl overflow-hidden border border-gray-800/50 hover:border-deekshant-teal/50 hover:shadow-2xl hover:shadow-deekshant-teal/10 transition-all duration-500 opacity-0 translate-y-8 hover:-translate-y-2 hover:bg-gray-900/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-deekshant-teal/0 group-hover:bg-deekshant-teal/5 transition-all duration-500"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-deekshant-black/80 rounded-full px-2 py-1 sm:px-3 sm:py-1 text-xs font-medium group-hover:bg-deekshant-teal/80 group-hover:text-deekshant-black transition-all duration-300">
                  {project.category}
                </div>

                {/* Hover overlay with links - Hidden on mobile for better touch experience */}
                <div className="absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-deekshant-black/20 hidden sm:flex">
                  <div className="flex space-x-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-deekshant-teal text-deekshant-black p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-3 rounded-full hover:bg-deekshant-teal hover:text-deekshant-black transition-all duration-300 hover:scale-110"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 group-hover:bg-gray-900/20 transition-all duration-500">
                <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 group-hover:text-deekshant-teal transition-colors duration-300 group-hover:transform group-hover:translate-x-1">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 sm:mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gray-800/70 text-gray-300 group-hover:bg-deekshant-teal/20 group-hover:text-deekshant-teal group-hover:border group-hover:border-deekshant-teal/30 transition-all duration-300 hover:scale-105"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3 sm:space-x-4">
                    <a
                      href={project.liveLink}
                      className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-medium text-deekshant-teal hover:text-white transition-all duration-300 hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} className="sm:w-4 sm:h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.repoLink}
                      className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-medium text-gray-400 hover:text-deekshant-teal transition-all duration-300 hover:translate-x-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} className="sm:w-4 sm:h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-deekshant-teal/70 transition-colors duration-300">
                    0{project.id}
                  </div>
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
