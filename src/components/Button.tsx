import React from 'react';

const sizes = {
  default: `py-3 px-5`,
  lg: `py-3 px-5 md:py-4 md:px-12`,
  xl: `py-3 px-5 md:py-5 md:px-16 md:text-lg`
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

const Button = ({
  children,
  className = "",
  size,
  href,
  element = ButtonElement.LINK,
  target,
}: props) => {
  const classNames: string = `
        ${sizes[size] || sizes.default}
        ${className}
        bg-orange-400
        text-center
        transition-all
        w-full 
        md:w-auto 
        block 
        md:inline
        duration-200 
        ease-in-out
        hover:bg-orange-600
        text-gray-800
        hover:text-gray-900
        uppercase
        button
        tracking-wider
        print:hidden
    `;

  if (element === ButtonElement.BUTTON) {
    return <button className={classNames}>{children}</button>;
  }
  if (element === ButtonElement.DIV) {
    return <div className={classNames}>{children}</div>;
  }
  return (
    <a href={href} className={classNames} target={target}>
      {children}
    </a>
  );
};

export default Button;
