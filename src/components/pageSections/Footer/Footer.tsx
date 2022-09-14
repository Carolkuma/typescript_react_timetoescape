import tw from "twin.macro";
import "twin.macro";
import styled from "styled-components";
import { Container } from "../../shared/Container";
import { FooterNavigation } from "./FooterNavigation";
import { Copyright } from "./Copyright";

const FooterContainer = styled.footer`
  height: 2rem;
  ${tw`bg-dark text-gray-100`}
`;

export const Footer = () => (
  <FooterContainer>
    <Container tw="px-3 flex flex-col md:flex-row-reverse text-center">
      <FooterNavigation />
      <Copyright />
    </Container>
  </FooterContainer>
);
