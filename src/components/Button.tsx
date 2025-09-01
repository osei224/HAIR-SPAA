import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  className = '' 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 hover:transform hover:scale-105';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
