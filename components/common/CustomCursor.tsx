'use client';

interface CustomCursorProps {
  mousePosition: { x: number; y: number };
  isHoveringInteractive: boolean;
}

export default function CustomCursor({
  mousePosition,
  isHoveringInteractive,
}: CustomCursorProps) {
  return (
    <div
      className="hidden lg:block fixed pointer-events-none z-[10000] mix-blend-difference rounded-full transition-all duration-75 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: isHoveringInteractive ? '48px' : '16px',
        height: isHoveringInteractive ? '48px' : '16px',
        backgroundColor: isHoveringInteractive ? 'rgba(255, 213, 79, 0.4)' : '#3FA9F5',
        border: isHoveringInteractive ? '2px solid #FFD54F' : 'none',
      }}
    />
  );
}
