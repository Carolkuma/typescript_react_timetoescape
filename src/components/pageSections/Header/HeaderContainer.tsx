import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.header<{
  isOpen: boolean;
  isScrolled: boolean;
}>`
  max-height: ${({ isOpen }) => (isOpen ? "100vh" : "5rem")};
  transition: max-height 0.3s ease-in-out, background-color 0.6s ease-in-out;
  position: sticky;
  width: 100%;
  overflow: hidden;
  z-index: 30;
  top: 0;
  color: var(--color-bg);
  ${tw`bg-dark shadow border-gray-800 print:bg-white`}
  ${({ isScrolled }) => (isScrolled ? tw`border-b` : tw`bg-opacity-0`)};
`;
