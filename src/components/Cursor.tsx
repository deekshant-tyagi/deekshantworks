
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

    const updatePositions = () => {
      if (!dotRef.current || !outlineRef.current) return;
      
      // Update dot position immediately
      dotRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      
      // Update outline position with smooth transition
      outlineRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    };

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
