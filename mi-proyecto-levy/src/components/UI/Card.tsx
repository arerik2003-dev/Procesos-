'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: 'sm' | 'md' | 'lg' | 'none';
}

export default function Card({
  children,
  className = '',
  shadow = 'sm',
}: CardProps) {
  const shadowStyles = {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    none: 'shadow-none',
  };

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 ${shadowStyles[shadow]} ${className}`}
    >
      {children}
    </div>
  );
}
