import React from 'react';
import Footer from './Footer';
import Header from './Header';
import loadable from "@loadable/component"

// const FacebookPixel = loadable(() => import( '../FacebookPixel'))
// const CustomerChat = loadable(() => import("../CustomerChat"))
import { Helmet } from 'react-helmet';
import CookieConsent from "react-cookie-consent";
import { withPrefix } from "gatsby"
import FacebookPixel from '../FacebookPixel';
import CustomerChat from '../CustomerChat';



interface props {
  isHome: boolean,
  isRegistrationEnabled?: boolean,
  showNav?: boolean,
  children: JSX.Element | JSX.Element[] | string,
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
  isHome,
}: props) => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#212121"></meta>
        <link rel="manifest" href={withPrefix("/manifest.json")} />
        <link href='https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&family=Teko:wght@500&display=swap' rel="stylesheet"></link>
      </Helmet>
      <div className="content">
        <Header
          isHome={isHome}
          showNav={showNav}
          isRegistrationEnabled={isRegistrationEnabled}
        />
        <main>{children}</main>
      </div>
      <Footer />
      <Helmet>
        {preconnect.map((url, key) => {
          return <link rel="preconnect" href={url} key={key}></link>;
        })}
      </Helmet>
      <FacebookPixel />
      <CustomerChat />
      <CookieConsent
        style={cookieStyle}
        disableStyles={true}
        location="bottom"
        buttonText="Rozumiem"
        declineButtonText="Decline"
        contentClasses="w-full "
        containerClasses="z-50 fixed w-full flex items-center bg-dark text-white text-sm font-bold px-4 py-3 print:hidden"
        cookieName="gatsby-gdpr-google-analytics"
        buttonClasses="py-3 px-5
        float-right
        text-sm
        bg-orange-400
        transition-all
        duration-200 
        ease-in-out
        hover:bg-orange-600
        text-gray-800
        hover:text-gray-200
        uppercase
        button
        w-full
        tracking-wider "
      >
        Táto stránka používa súbory cookies a iné technológie pre správne
        fungovanie a zlepšenie chodu stránky.
      </CookieConsent>
    </>
  );
};

Layout.defaultProps = {
  isHome: false,
}

export default Layout;
