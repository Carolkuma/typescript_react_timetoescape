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
  w-full 
  md:w-auto 
  block 
  md:inline
  duration-200 
  ease-in-out
  text-gray-800
  uppercase
  tracking-wider
  hover:text-gray-900 
  py-3
  px-5
  print:hidden
  `}
  background-color: #f6ad55;
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
