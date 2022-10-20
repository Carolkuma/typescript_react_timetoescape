import { Footer } from "../pageSections/Footer/Footer";
import Header from "../pageSections/Header/Header";
import loadable from "@loadable/component";
import { GlobalStyles } from "../GlobalStyles";
import { Content } from "../shared/Content";
import { CookieConsent } from "../shared/cookie-consent/CookieConsent";
import { Main } from "../shared/Main";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../shared/theme";
import type { PropsWithChildren } from "react";
const FacebookCodes = loadable(() => import("../FacebookCodes"));

interface Props extends PropsWithChildren {
  isHome?: boolean;
  isRegistrationEnabled?: boolean;
  showNav?: boolean;
  changeBgOpacity?: boolean;
}

const Layout = ({
  children,
  showNav,
  changeBgOpacity,
  isHome = false,
}: Props) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CookieConsent />
      <Content>
        <Header
          isHome={isHome}
          showNav={showNav}
          changeBgOpacity={changeBgOpacity}
        />
        <Main>{children}</Main>
      </Content>
      <Footer />
      <FacebookCodes />
    </ThemeProvider>
  );
};

export default Layout;
