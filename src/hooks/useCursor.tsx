
import { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function useCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    document.addEventListener('mousedown', () => setIsHovering(true));
    document.addEventListener('mouseup', () => setIsHovering(false));

    // Set up event delegation for handling hover states
    document.addEventListener('mouseover', (e) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-hover') ||
        target.closest('.project-item')
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
        target.closest('.project-item')
      ) {
        setIsHovering(false);
      }
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', () => setIsHovering(true));
      document.removeEventListener('mouseup', () => setIsHovering(false));
      document.removeEventListener('mouseover', () => {});
      document.removeEventListener('mouseout', () => {});
    };
  }, []);

  return { position, isHovering };
}
