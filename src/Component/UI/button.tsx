import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseStyles = 'px-10 md:px-12 py-3 md:py-4 rounded-full font-medium transition-all duration-700 cursor-pointer font-leaguespartan';
  
  const variantStyles = {
    primary: 'bg-[#DEF7F7] text-[#154E4D] hover:bg-[#beefee] ',
    secondary: 'bg-[#154E4D] text-[#DEF7F7] hover:bg-[#DEF7F7] hover:text-[#154E4D]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className='flex justify-center items-center mt-1'>{children}</span>
    </button>
  );
};

export default Button;
