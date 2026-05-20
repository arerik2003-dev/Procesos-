'use client';

import React from 'react';

interface BadgeProps {
  label: string;
  value: string;
  variant?: 'default' | 'primary' | 'success' | 'warning';
}

export default function Badge({
  label,
  value,
  variant = 'default',
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-700',
    primary: 'bg-blue-50 text-blue-900',
    success: 'bg-green-50 text-green-900',
    warning: 'bg-yellow-50 text-yellow-900',
  };

  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
        {label}
      </span>
      <span className={`inline-flex items-center w-fit px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}>
        {value}
      </span>
    </div>
  );
}
