
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

    document.addEventListener('mousemove', updatePosition);

    document.addEventListener('mousedown', () => {
      setIsClicking(true);
      setTimeout(() => setIsClicking(false), 150);
    });
    
    document.addEventListener('mouseup', () => setIsClicking(false));

    // Set up event delegation for handling hover states
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item') ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(false);
      }
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', () => setIsClicking(true));
      document.removeEventListener('mouseup', () => setIsClicking(false));
      document.removeEventListener('mouseover', () => {});
      document.removeEventListener('mouseout', () => {});
    };
  }, []);

  return { position, isHovering, isClicking };
}
