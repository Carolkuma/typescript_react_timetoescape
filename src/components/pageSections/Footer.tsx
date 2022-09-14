import React from "react";
import { Link } from "gatsby";
import nav from "../../../content/home/common/navigation.json";
import tw from "twin.macro";
import "twin.macro";
import styled from "styled-components";
import { Container } from "../shared/Container";

const { footer } = nav;
const FOOTER_NAVIGATION = footer;

const Copyright = ({ startYear = 2020 }) => {
  const toYear = new Date().getFullYear();
  const copyrightDate =
    startYear === toYear ? `${startYear}` : `${startYear} - ${toYear}`;
  return <>© {copyrightDate}</>;
};

const FooterContainer = styled.footer`
  height: 2rem;
  ${tw`bg-dark text-gray-100 print:bg-white print:text-gray-500`}
`;

const FooterNavigation = styled.nav`
  ${tw`print:hidden flex flex-col md:flex-row border-b md:border-none`}
`;

const Footer = () => (
  <FooterContainer as={"footer"}>
    <Container tw="px-3 flex flex-col md:flex-row-reverse text-center">
      <FooterNavigation>
        {FOOTER_NAVIGATION.map(({ link, label }, i) => (
          <Link
            to={link}
            activeClassName="text-orange-400"
            tw="text-center md:ml-5 px-3 py-5 md:pb-0 block md:flex"
            key={i}
          >
            {label}
          </Link>
        ))}
      </FooterNavigation>
      <span tw="flex-grow md:text-left py-5">
        <Copyright /> Time to Escape
      </span>
    </Container>
  </FooterContainer>
);

export default Footer;
