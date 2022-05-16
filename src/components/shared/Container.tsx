import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div<{ isCentered?: boolean }>`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${({ isCentered }) => (isCentered ? "auto" : "0")};
  margin-right: ${({ isCentered }) => (isCentered ? "auto" : "0")};
  ${tw`container`};
`;

Container.defaultProps = { isCentered: true };
