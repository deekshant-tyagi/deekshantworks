
import React, { useState, useEffect } from 'react';
import Cursor from '@/components/Cursor';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ToolsSection from '@/components/ToolsSection';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoadingComplete = () => {
    setContentVisible(true);
    // Reduced loading animation time to 0.5 second
    setTimeout(() => {
      setLoading(false);
    }, 500); // Shortened to 500ms for faster loading
  };

  useEffect(() => {
    // Preload important images
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1634942537034-a3dffedcd539?q=80&w=2000&auto=format&fit=crop'
      ];

      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();
    
    // Trigger loading complete quickly
    setTimeout(handleLoadingComplete, 500);
  }, []);

  return (
    <div className="min-h-screen bg-ayush-black text-ayush-white">
      {loading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      <div className={`transition-opacity duration-500 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <ToolsSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
