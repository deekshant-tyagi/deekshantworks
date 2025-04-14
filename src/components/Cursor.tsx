
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

    const smoothMove = (element: HTMLElement | null, x: number, y: number) => {
      if (!element) return;
      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    if (dotRef.current) {
      smoothMove(dotRef.current, position.x, position.y);
    }
    
    if (outlineRef.current) {
      // Add a slight delay to the outline for a trailing effect
      setTimeout(() => {
        smoothMove(outlineRef.current, position.x, position.y);
      }, 50);
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
