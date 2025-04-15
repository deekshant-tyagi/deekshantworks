
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = 
        ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'LABEL'].includes(target.tagName) ||
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item, a, button, [role="button"], .cursor-hover, .nav-link');
      
      setIsHovering(!!isHoverable);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, true);
    document.addEventListener('mouseout', () => setIsHovering(false), true);
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver, true);
      document.removeEventListener('mouseout', () => setIsHovering(false), true);
    };
  }, []);

  return { position, isHovering, isClicking, isVisible };
}
