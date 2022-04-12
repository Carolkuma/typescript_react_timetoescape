import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const sizes = {
  default: `button bg-orange-400 hover:text-gray-900 hover:bg-orange-600 py-3 px-5`,
  lg: `button bg-orange-400 hover:text-gray-900 hover:bg-orange-600 py-3 px-5 md:py-4 md:px-12`,
  xl: `button bg-orange-400 hover:text-gray-900 hover:bg-orange-600 py-3 px-5 md:py-5 md:px-16 md:text-lg`,
};

interface props {
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
  size?: string;
  rel?: string;
  href?: string;
  target?: string;
  element?: ButtonElement;
}

export enum ButtonElement {
  LINK,
  BUTTON,
  DIV,
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
  print:hidden`}
`;

const Button = ({
  children,
  className = "",
  rel,
  size,
  href,
  element = ButtonElement.LINK,
  target,
}: props) => {
  const classNames: string = `
        ${sizes[size] || sizes.default}
        ${className}
    `;

  if (element === ButtonElement.BUTTON) {
    return (
      <StyledButton as="button" className={classNames}>
        {children}
      </StyledButton>
    );
  }
  if (element === ButtonElement.DIV) {
    return <StyledButton className={classNames}>{children}</StyledButton>;
  }
  return (
    <StyledButton
      as="a"
      href={href}
      rel={rel}
      className={classNames}
      target={target}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
