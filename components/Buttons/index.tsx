/*
 *   Copyright (c) 2023 
 *   All rights reserved.
 */
import React from "react";
interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}
export function Buttons({ size='medium' ,children}: ButtonProps): JSX.Element {
    const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'px-4 py-2 text-sm';
      case 'medium':
        return 'px-6 py-3 text-base';
      case 'large':
        return 'px-8 py-4 text-lg';
      default:
        return 'x-6 py-3 text-base';
    }
  };

  return  <button
      className={`bg-green-light  text-accent-dark rounded ${getSizeClass()} font-semibold focus:outline-none focus:shadow-outline-green active:bg-green-accent`}
    >
      {children}
    </button>
}