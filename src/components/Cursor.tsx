
import React, { useRef, useEffect, useState } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const magneticRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking } = useCursor();
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isMobile) return;

    // Function to check if user has scrolled enough to show cursor
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // For smooth cursor, use requestAnimationFrame instead of direct style updates
    let lastX = position.x;
    let lastY = position.y;
    
    const smoothValues = {
      dot: { x: position.x, y: position.y },
      outline: { x: position.x, y: position.y },
      magnetic: { x: position.x, y: position.y }
    };

    const animateCursor = () => {
      if (!dotRef.current || !outlineRef.current || !magneticRef.current) {
        requestAnimationFrame(animateCursor);
        return;
      }
      
      // Get current position
      const targetX = position.x;
      const targetY = position.y;
      
      // Update dot position with minimal lag (very responsive)
      smoothValues.dot.x += (targetX - smoothValues.dot.x) * 0.5;
      smoothValues.dot.y += (targetY - smoothValues.dot.y) * 0.5;
      
      // Update outline with more lag for smoother feel
      smoothValues.outline.x += (targetX - smoothValues.outline.x) * 0.15;
      smoothValues.outline.y += (targetY - smoothValues.outline.y) * 0.15;
      
      // Update magnetic with even more lag
      smoothValues.magnetic.x += (targetX - smoothValues.magnetic.x) * 0.08;
      smoothValues.magnetic.y += (targetY - smoothValues.magnetic.y) * 0.08;
      
      // Apply the new positions
      dotRef.current.style.transform = `translate(${smoothValues.dot.x}px, ${smoothValues.dot.y}px)`;
      outlineRef.current.style.transform = `translate(${smoothValues.outline.x}px, ${smoothValues.outline.y}px)`;
      magneticRef.current.style.transform = `translate(${smoothValues.magnetic.x}px, ${smoothValues.magnetic.y}px)`;
      
      // Request next frame
      requestAnimationFrame(animateCursor);
    };
    
    const requestId = requestAnimationFrame(animateCursor);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(requestId);
    };
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'cursor-visible' : ''}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'cursor-visible' : ''}`}
      />
      <div 
        ref={magneticRef}
        className={`cursor-magnetic ${isVisible ? 'cursor-visible' : ''}`}
      />
    </>
  );
};

export default Cursor;
