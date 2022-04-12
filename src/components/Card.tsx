import tw from "twin.macro";
import styled from "styled-components";
interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}
type Ref = HTMLDivElement;

export const Card = styled.div`
  ${tw`md:rounded-lg md:border border-solid border-gray-200 overflow-hidden`}
  @media only screen and (min-width: 769px) {
    & {
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
    }
  }

  @media only screen and (min-width: 769px) and (prefers-color-scheme: dark) {
    & {
      box-shadow: 0 10px 28px rgba(255, 255, 255, 0.08);
    }
  }
`;
