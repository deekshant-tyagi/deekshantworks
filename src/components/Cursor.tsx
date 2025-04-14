
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

    const moveDot = (x: number, y: number) => {
      if (!dotRef.current) return;
      dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    const moveOutline = (x: number, y: number) => {
      if (!outlineRef.current) return;
      outlineRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    // Update dot position immediately
    moveDot(position.x, position.y);
    
    // Add a slight delay to the outline for a trailing effect
    requestAnimationFrame(() => {
      moveOutline(position.x, position.y);
    });
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
