import styled from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.header<{ isOpen: boolean }>`
  maxheight: ${({ isOpen }) => (isOpen ? "100vh" : "5rem")};
  transition: max-height 0.3s ease-in-out, background-color 0.6s ease-in-out;
  ${tw`overflow-hidden sticky w-full z-20 top-0 bg-dark shadow border-gray-800 print:bg-white`}
`;
