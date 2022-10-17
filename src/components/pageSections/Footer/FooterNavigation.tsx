import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import nav from "../../../../content/home/common/navigation.json";

const { footer } = nav;
const FOOTER_NAVIGATION = footer;

const FooterNavigationContainer = styled.nav`
  ${tw`print:hidden flex flex-col md:flex-row border-b md:border-none`}
`;

export const FooterNavigation = () => {
  return (
    <FooterNavigationContainer>
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
    </FooterNavigationContainer>
  );
};
