import React from 'react';

export const IsometricCubeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-white" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Isometric Cube Shape */}
    <path
      d="M24 6L40 15.24V33.72L24 43L8 33.72V15.24L24 6Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
      fill="rgba(255,255,255,0.08)"
    />
    <path
      d="M24 6V24.5M24 24.5L40 15.24M24 24.5L8 15.24M24 24.5V43"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inner decorative hexagon */}
    <circle cx="24" cy="24.5" r="3" fill="currentColor" opacity="0.9" />
  </svg>
);

export const UxDesignIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8 text-white" }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* UI Wireframe Window / Card */}
    <rect
      x="8"
      y="8"
      width="32"
      height="26"
      rx="3"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="2 2"
      opacity="0.6"
    />
    {/* Window dots */}
    <circle cx="13" cy="13" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="18" cy="13" r="1.5" fill="currentColor" opacity="0.8" />
    <circle cx="23" cy="13" r="1.5" fill="currentColor" opacity="0.8" />
    
    {/* UI Flow Arrow */}
    <path
      d="M14 24C18 24 19 18 25 18H28"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    
    {/* Hand/Cursor Clicking */}
    <g transform="translate(20, 16)">
      {/* Click rays */}
      <path d="M12 2L14 0M17 5L20 4M15 10L18 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      {/* Pointer Cursor / Finger */}
      <path
        d="M6 16V9.5C6 8.67 6.67 8 7.5 8C8.33 8 9 8.67 9 9.5V14M9 11C9 10.17 9.67 9.5 10.5 9.5C11.33 9.5 12 10.17 12 11V14.5M12 12C12 11.17 12.67 10.5 13.5 10.5C14.33 10.5 15 11.17 15 12V17C15 20.31 12.31 23 9 23H7C4.79 23 3 21.21 3 19L3 15C3 13.5 4.5 12 6 13.5V16Z"
        fill="currentColor"
        stroke="rgba(30, 98, 212, 0.4)"
        strokeWidth="1"
      />
    </g>
  </svg>
);

export const WireframePlaceholderGraphic: React.FC<{ className?: string }> = ({ className = "w-full h-full" }) => (
  <svg
    viewBox="0 0 200 120"
    preserveAspectRatio="none"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background subtle grid */}
    <rect width="200" height="120" fill="#1e62d4" />
    {/* Crossed diagonals matching the UI mockup */}
    <line x1="0" y1="0" x2="200" y2="120" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
    <line x1="200" y1="0" x2="0" y2="120" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
    {/* Inner frame */}
    <rect x="10" y="10" width="180" height="100" stroke="rgba(255,255,255,0.18)" strokeWidth="1" strokeDasharray="3 3" rx="4" />
  </svg>
);
