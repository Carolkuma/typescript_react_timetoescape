import styled from "styled-components";
import tw from "twin.macro";
import { Container } from "../../shared/Container";

export const NavContainer = styled(Container)`
  ${tw`flex flex-row-reverse lg:flex-row items-center justify-between flex-wrap p-3`}
`;
