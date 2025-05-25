import React, { useState, ReactNode } from 'react';

type Ripple = {
  x: number;
  y: number;
  size: number;
  id: number;
};

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const RippleButton: React.FC<RippleButtonProps> = ({ children, className = '', onClick }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple: Ripple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
    >
      {children}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white opacity-30 rounded-full animate-ripple"
          style={{
            width: ripple.size,
            height: ripple.size,
            top: ripple.y,
            left: ripple.x,
          }}
        />
      ))}
    </button>
  );
};

export default RippleButton;