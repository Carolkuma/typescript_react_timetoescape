import React from "react";
import Footer from "../pageSections/Footer";
import Header from "../pageSections/Header/Header";
import loadable from "@loadable/component";

const FacebookCodes = loadable(() => import("../FacebookCodes"));
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { GlobalStyles } from "../GlobalStyles";
import { Content } from "../shared/Content";
import { CookieConsent as CookieConsentOld } from "react-cookie-consent";
import { CookieConsent } from "../shared/cookie-consent/CookieConsent";
import { Main } from "../shared/Main";

interface Props {
  isHome: boolean;
  isRegistrationEnabled?: boolean;
  showNav?: boolean;
  changeBgOpacity?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

const preconnect = [
  "https://connect.facebook.net",
  "https://www.facebook.com",
  "https://static.xx.fbcdn.net",
  "https://vars.hotjar.com",
  "https://script.hotjar.com",
];

const cookieStyle = {
  zIndex: 2147483646,
};

const Layout = ({
  children,
  isRegistrationEnabled,
  showNav,
  changeBgOpacity,
  isHome,
}: Props) => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#212121"></meta>
        <link rel="manifest" href={withPrefix("/manifest.json")} />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Teko:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
      <GlobalStyles />
      <CookieConsent />
      <Content>
        <Header
          isHome={isHome}
          showNav={showNav}
          changeBgOpacity={changeBgOpacity}
          isRegistrationEnabled={isRegistrationEnabled}
        />
        <Main>{children}</Main>
      </Content>
      <Footer />
      <Helmet>
        {preconnect.map((url, key) => {
          return <link rel="preconnect" href={url} key={key}></link>;
        })}
      </Helmet>
      <FacebookCodes />
    </>
  );
};

Layout.defaultProps = {
  isHome: false,
};

export default Layout;
