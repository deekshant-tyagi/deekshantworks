import React, { useRef, useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import ContactHeader from './contact/ContactHeader';
import ContactInfo from './contact/ContactInfo';
import SocialLinks from './contact/SocialLinks';
import CallToAction from './contact/CallToAction';

const Contact: React.FC = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-4 sm:py-12 md:py-16 lg:py-24 bg-deekshant-black relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background highlight effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-deekshant-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-deekshant-teal/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 md:px-8 transition-opacity duration-700 relative z-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
          <ContactHeader />

          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl mb-6 sm:mb-10 bg-gray-900/20 backdrop-blur-sm border border-gray-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
              <ContactInfo />
              <Separator orientation="vertical" className="h-40 hidden md:block" />
              <div className="w-full md:hidden">
                <Separator orientation="horizontal" className="my-4" />
              </div>
              <SocialLinks />
            </div>
          </div>

          <CallToAction />
        </div>
      </div>
    </section>
  );
};

export default Contact;
