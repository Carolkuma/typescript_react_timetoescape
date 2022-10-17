import React from "react";
import { Footer } from "../pageSections/Footer/Footer";
import Header from "../pageSections/Header/Header";
import loadable from "@loadable/component";

const FacebookCodes = loadable(() => import("../FacebookCodes"));
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import { GlobalStyles } from "../GlobalStyles";
import { Content } from "../shared/Content";
import { CookieConsent } from "../shared/cookie-consent/CookieConsent";
import { Main } from "../shared/Main";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../shared/theme";

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

const Layout = ({
  children,
  isRegistrationEnabled,
  showNav,
  changeBgOpacity,
  isHome,
}: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
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
        <Header showNav={showNav} changeBgOpacity={changeBgOpacity} />
        <Main>{children}</Main>
      </Content>
      <Footer />
      <Helmet>
        {preconnect.map((url, key) => {
          return <link rel="preconnect" href={url} key={key}></link>;
        })}
      </Helmet>
      <FacebookCodes />
    </ThemeProvider>
  );
};

Layout.defaultProps = {
  isHome: false,
};

export default Layout;
