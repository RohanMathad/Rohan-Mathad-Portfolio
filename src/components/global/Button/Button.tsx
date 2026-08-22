import React from 'react';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import styles from './Button.module.scss'; // Unused but imported per structure requirements

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className, children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-label-sm text-label-sm px-6 py-3 rounded-full transition-all duration-300";
  
  const variants = {
    primary: "bg-primary text-on-primary hover:bg-white/90",
    glass: "glass-card text-on-background hover:bg-white/10",
    ghost: "text-on-surface-variant hover:text-primary"
  };

  return (
    <button 
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
