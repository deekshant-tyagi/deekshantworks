
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

    const smoothMove = (element: HTMLElement | null, x: number, y: number, delay: number = 0) => {
      if (!element) return;
      
      // Add a slight delay between dot and outline for better separation
      setTimeout(() => {
        element.style.transform = `translate(${x}px, ${y}px)`;
      }, delay);
    };

    if (dotRef.current) {
      smoothMove(dotRef.current, position.x, position.y, 0); // No delay for dot
    }
    
    if (outlineRef.current) {
      smoothMove(outlineRef.current, position.x, position.y, 10); // Small delay for outline
    }
  }, [position, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className={`cursor-dot ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
      <div 
        ref={outlineRef} 
        className={`cursor-outline ${isHovering ? 'active' : ''} ${isClicking ? 'clicking' : ''} ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

export default Cursor;
