import React from 'react';

const sizes = {
  default: `py-3 px-8`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};


interface props {
  children?: JSX.Element | JSX.Element[] | string,
  className?: string,
  size?: string, 
  href?: string,
}


const Button = ({ children, className = '', size, href }: props) => {
  return (
    <a
      href={href}
      type="button"
      className={`
        ${sizes[size] || sizes.default}
        ${className}
        bg-orange-400
        hover:bg-orange-600
        text-gray-800
        uppercase
    `}
    >
      {children}
    </a>
  );
};

export default Button;
