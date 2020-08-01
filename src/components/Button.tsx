import React from 'react';

const sizes = {
  default: `py-3 px-5`,
  lg: `py-4 px-12`,
  xl: `py-5 px-16 text-lg`
};


interface props {
  children?: JSX.Element | JSX.Element[] | string,
  className?: string,
  size?: string, 
  href?: string,
  target?: string,
  element?: ButtonElement
}

export enum ButtonElement {
  LINK,
  BUTTON,
  DIV
}

const Button = ({ children, className = '', size, href, element = ButtonElement.LINK }: props) => {
  const classNames: string = `
        ${sizes[size] || sizes.default}
        ${className}
        bg-orange-400
        transition-all
        inline
        duration-200 
        ease-in-out
        hover:bg-orange-600
        text-gray-800
        hover:text-gray-900
        uppercase
        button
        tracking-wider
    `;

  if (element === ButtonElement.BUTTON) {
    return<button className={classNames}>
           {children}
    </button>;
  }
  if (element === ButtonElement.DIV) {
    return <div className={classNames}>{children}</div>;
  }
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
};

export default Button;
