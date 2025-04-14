import React, { JSX } from 'react';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1' | 'body2' | 'caption';
type ColorVariant = 'primary' | 'secondary' | 'white' | 'gray' | 'black';

interface TypographyProps {
  variant?: VariantType;
  color?: ColorVariant;
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'body1',
  color = 'white',
  children,
  className = '',
  as,
}) => {
  const colorStyles = {
    primary: 'text-[#7DDEDA]',
    secondary: 'text-[#154E4D]',
    white: 'text-white',
    gray: 'text-gray-300',
    black: 'text-black',
  };

  const variantStyles = {
    h1: 'text-6xl 2xl:text-[80px] font-light leading-tight',
    h2: 'text-5xl xl:text-6xl font-light leading-normal',
    h3: 'text-3xl 2xl:text-4xl font-medium leading-relaxed',
    h4: 'text-lg lg:text-xl font-medium leading-relaxed',
    h5: 'text-2xl font-medium leading-relaxed',
    body1: 'text-lg leading-relaxed',
    body2: 'text-base leading-relaxed',
    caption: 'text-sm leading-normal',
  };

  const Component = as || getDefaultComponent(variant);

  return (
    <Component 
      className={`${variantStyles[variant]} ${colorStyles[color]} ${className}`}
    >
      {children}
    </Component>
  );
};

const getDefaultComponent = (variant: VariantType): keyof JSX.IntrinsicElements => {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    default:
      return 'p';
  }
};

export default Typography; 