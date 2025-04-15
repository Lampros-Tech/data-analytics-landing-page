import React, { JSX } from 'react';

type VariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7' | 'body1' | 'body2' | 'caption' | 'title';
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
    h1: 'text-[96px] font-[200] leading-[106px]',
    h2: 'text-[64px] font-[300] leading-[80px]',
    h3: 'text-[48px] font-[300]',
    h4: 'text-[36px] font-[400]',
    h5: 'text-[24px] font-[500]',
    h6: 'text-[36px] font-[500]',
    h7: 'text-[32px] font-[500]',
    body1: 'text-lg leading-relaxed',
    body2: 'text-base leading-relaxed',
    caption: 'text-sm leading-normal',
    title: 'text-[80px] font-[300] leading-[90px]'
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