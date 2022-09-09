import styled from "styled-components";
import tw from "twin.macro";

const VARIANTS = {};

export const H1 = styled.h1<{ altFont: boolean }>`
  ${tw`text-4xl lg:text-5xl xl:text-6xl leading-none`}
  ${({ altFont }) =>
    altFont
      ? `
    font-family: "Teko", sans-serif;
    font-weight: 400;`
      : ""}
`;

export const H2 = styled.h2<{ altFont: boolean }>`
  ${tw`text-3xl lg:text-4xl leading-none`}
  ${({ altFont }) =>
    altFont
      ? `
    font-family: "Teko", sans-serif;
    font-weight: 400;`
      : ""}
`;
