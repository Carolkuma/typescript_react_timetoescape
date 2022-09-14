import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const sizes = {
  default: ``,
  lg: `md:py-4 md:px-12`,
  xl: `md:py-5 md:px-16 md:text-lg`,
};

interface props {
  children?: JSX.Element | JSX.Element[] | string;
  size?: string;
  rel?: string;
  href?: string;
  target?: string;
  element?: ButtonElement;
  onClick?: () => void;
}

export enum ButtonElement {
  LINK = "a",
  BUTTON = "button",
  DIV = "div",
}

const StyledButton = styled.div`
  ${tw`
  text-center
  transition-all
   
  inline
  duration-200 
  ease-in-out
  text-gray-50
  font-medium
  uppercase
  tracking-wider
  hover:text-white 
  hover:drop-shadow-2xl
  py-3
  px-8
  print:hidden
  rounded
  drop-shadow-xl
  bg-gradient-to-r
  from-yellow-600 to-yellow-700
  `}
  // background-color: #f6ad55;
  /* Created with https://www.css-gradient.com */
  background: #F6AE56;
  background: -webkit-radial-gradient(center, #f6ae56, #e5983c);
  background: -moz-radial-gradient(center, #f6ae56, #e5983c);
  background: radial-gradient(ellipse at center, #f6ae56, #e5983c);
`;

const Button = ({
  children,
  rel,
  size,
  href,
  element = ButtonElement.LINK,
  target,
  onClick,
}: props) => {
  const classNames: string = `
        bg-orange-400 
        hover:bg-orange-600
        ${sizes[size] || sizes.default}
    `;

  if (element === ButtonElement.BUTTON) {
    return (
      <StyledButton as="button" className={classNames} onClick={onClick}>
        {children}
      </StyledButton>
    );
  }
  if (element === ButtonElement.DIV) {
    return (
      <StyledButton className={classNames} onClick={onClick}>
        {children}
      </StyledButton>
    );
  }
  return (
    <StyledButton
      as="a"
      href={href}
      rel={rel}
      className={classNames}
      target={target}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
