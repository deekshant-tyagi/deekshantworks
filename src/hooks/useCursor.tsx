
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || 
        target.classList.contains('cursor-hover') ||
        !!target.closest('.project-item') || 
        !!target.closest('a') || 
        !!target.closest('button') ||
        !!target.closest('[role="button"]');
      
      if (isHoverable) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || 
        target.classList.contains('cursor-hover') ||
        !!target.closest('.project-item') || 
        !!target.closest('a') || 
        !!target.closest('button') ||
        !!target.closest('[role="button"]');
      
      if (isHoverable) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', handleMouseOut, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', handleMouseOut, true);
    };
  }, []);

  return { position, isHovering, isClicking };
}
