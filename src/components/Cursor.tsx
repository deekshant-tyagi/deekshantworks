
import React, { useRef, useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking } = useCursor();
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (isMobile) return;
    
    const animateCursor = () => {
      if (!dotRef.current || !outlineRef.current) return;
      
      // Get current position
      const targetX = position.x;
      const targetY = position.y;
      
      // Apply the positions with transform for hardware acceleration
      dotRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      outlineRef.current.style.transform = `translate(${targetX}px, ${targetY}px)`;
      
      // Request next frame
      requestAnimationFrame(animateCursor);
    };
    
    requestAnimationFrame(animateCursor);
    
    // Make cursor visible only after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (dotRef.current) dotRef.current.classList.add('cursor-visible');
        if (outlineRef.current) outlineRef.current.classList.add('cursor-visible');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
      />
    </>
  );
};

export default Cursor;
