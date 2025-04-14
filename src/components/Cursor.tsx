
import React, { useRef, useEffect } from 'react';
import { useCursor } from '@/hooks/useCursor';
import { useIsMobile } from '@/hooks/use-mobile';

const Cursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const { position, isHovering, isClicking, isVisible } = useCursor();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    // Function to update element positions
    const updatePositions = () => {
      if (!dotRef.current || !outlineRef.current) return;
      
      // Position the dot
      dotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      
      // Position the outline with slight lag for smooth following effect
      outlineRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    };
    
    // Use requestAnimationFrame for smooth animation
    const animationId = requestAnimationFrame(updatePositions);
    
    return () => cancelAnimationFrame(animationId);
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

export default Cursor;
