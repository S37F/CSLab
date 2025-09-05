
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={`block w-full bg-background-elevated border border-border rounded-md shadow-sm py-2 px-3 text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:border-accent-primary sm:text-sm transition-colors duration-200 ${className}`}
      {...props}
    />
  );
};

export default Input;
