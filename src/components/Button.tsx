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
  element?: ButtonElement
}

export enum ButtonElement {
  LINK,
  BUTTON
}

const Button = ({ children, className = '', size, href, element = ButtonElement.LINK }: props) => {
  const classNames: string  = `
        ${sizes[size] || sizes.default}
        ${className}
        bg-orange-400
        hover:bg-orange-600
        text-gray-800
        hover:text-gray-200
        uppercase
        button
    `

  if (element === ButtonElement.BUTTON) {
    return<button className={classNames}>
           {children}
    </button>;
  }
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
};

export default Button;
