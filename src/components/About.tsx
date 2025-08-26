
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
    <section id="about" className="py-4 sm:py-12 md:py-16" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="content-container max-w-6xl mx-auto opacity-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-6 sm:mb-12 text-center">About <span className="curly-underline">Me</span></h2>

          {/* Mobile View - Clean and Simple */}
          <div className="block lg:hidden">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:border-deekshant-teal/30 transition-all duration-300 text-center">
              <div className="space-y-4">
                <p className="text-base text-deekshant-gray leading-relaxed">
                  Hi, I'm <span className="text-deekshant-teal font-semibold">Deekshant</span> — a passionate
                  <span className="text-deekshant-teal font-semibold"> MERN stack developer</span> who transforms ideas into digital reality.
                </p>

                <p className="text-base text-deekshant-gray leading-relaxed">
                  I craft <span className="text-deekshant-teal font-semibold">scalable web applications</span> with clean code and seamless user experiences.
                </p>

                <p className="text-base text-deekshant-gray leading-relaxed">
                  Let's build something <span className="text-deekshant-teal font-semibold">amazing</span> together! 🚀
                </p>
              </div>
              {/* // exp card for mobile view */}
              <div className="lg:col-span-1 mt-8">
              <div className="bg-gradient-to-br from-deekshant-teal/10 to-gray-900/40 backdrop-blur-sm border border-deekshant-teal/20 rounded-xl p-8 hover:border-deekshant-teal/40 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-deekshant-teal/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-deekshant-teal/30 pl-4">
                    <h4 className="font-semibold text-white text-lg">Frontend Developer</h4>
                    <p className="text-deekshant-teal font-medium">Prodesk IT Pvt Ltd</p>
                    <p className="text-sm text-gray-400 mb-3">Internship</p>
                    <ul className="text-sm text-deekshant-gray space-y-2">
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Built responsive user interfaces using modern JavaScript frameworks
                      </li>
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Collaborated with development teams on cross-platform web applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Optimized applications for performance and accessibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Desktop View - Original Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {/* Main About Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-deekshant-teal/30 transition-all duration-300">
                <p className="text-deekshant-gray text-lg leading-relaxed mb-6">
                  Hi, I'm <span className="text-deekshant-teal font-semibold">Deekshant</span>, a passionate MERN stack developer with expertise in building scalable, modern web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="text-deekshant-gray text-lg leading-relaxed">
                  With a strong foundation in <span className="text-deekshant-teal font-semibold">full-stack development</span>, I specialize in creating seamless user experiences using cutting-edge technologies like React.js, Node.js, MongoDB, and Express.js.
                </p>
              </div>

              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-8 hover:border-deekshant-teal/30 transition-all duration-300">
                <p className="text-deekshant-gray text-lg leading-relaxed">
                  I'm always eager to take on new challenges and collaborate on innovative projects that push the boundaries of web development. Let's build something amazing together! 🚀
                </p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-deekshant-teal/10 to-gray-900/40 backdrop-blur-sm border border-deekshant-teal/20 rounded-xl p-8 hover:border-deekshant-teal/40 transition-all duration-300 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-deekshant-teal/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-deekshant-teal/30 pl-4">
                    <h4 className="font-semibold text-white text-lg">Frontend Developer</h4>
                    <p className="text-deekshant-teal font-medium">Prodesk IT Pvt Ltd</p>
                    <p className="text-sm text-gray-400 mb-3">Internship</p>
                    <ul className="text-sm text-deekshant-gray space-y-2">
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Built responsive user interfaces using modern JavaScript frameworks
                      </li>
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Collaborated with development teams on cross-platform web applications
                      </li>
                      <li className="flex items-start">
                        <span className="text-deekshant-teal mr-2">▸</span>
                        Optimized applications for performance and accessibility
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
