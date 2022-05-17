import React, { memo } from "react";
import styled from "styled-components";
import tw from "twin.macro";
interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const IconBar = styled.span<{ isOpen: boolean }>`
  width: 25px;
  height: 2px;
  background-color: #fff;
  transition: all 0.2s;
  display: block;
  margin: 5px;

  ${({ isOpen }) =>
    isOpen &&
    `
  &:first-child {
    transform: rotate(45deg);
    transform-origin: 10% 10%;
  }

  &:nth-child(2) {
    opacity: 0;
  }

  &:last-child {
    transform: rotate(-45deg);
    transform-origin: 10% 90%;
  }
  `}
`;

const Button = styled.button`
  display: block;
  ${tw`lg:hidden pl-3 py-2`}
`;

export const NavigationButton = memo(({ isOpen, onClick }: Props) => (
  <Button onClick={onClick} aria-label="Menu">
    {[...Array(3)].map((_, i) => (
      <IconBar key={i} isOpen={isOpen} />
    ))}
  </Button>
));
