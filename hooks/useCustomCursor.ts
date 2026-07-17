'use client';

import { useEffect, useState } from 'react';

export function useCustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleHoverStart = () => setIsHoveringInteractive(true);
    const handleHoverEnd = () => setIsHoveringInteractive(false);

    const updateInteractives = () => {
      const interactives = document.querySelectorAll(
        'button, a, [role="button"], input, select, textarea'
      );
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    updateInteractives();

    const observer = new MutationObserver(updateInteractives);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return { mousePosition, isHoveringInteractive };
}
