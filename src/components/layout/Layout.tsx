import React from 'react';
import Footer from './Footer';
import Header from './Header';
import loadable from "@loadable/component"
const FacebookPixel = loadable(() => import( '../FacebookPixel'))
const CustomerChat = loadable(() => import("../CustomerChat"))
import { Helmet } from 'react-helmet';


interface props {
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




const Layout = ({ children, isRegistrationEnabled, showNav }: props) => {
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#212121"></meta>
        <link
          rel="preload"
          href="https://time-to-escape-escape-room.reservio.com/booking"
        ></link>
      </Helmet>
      <div className="content">
        <Header
          showNav={showNav}
          isRegistrationEnabled={isRegistrationEnabled}
        />
        <main className="text-gray-900">{children}</main>
      </div>
      <Footer />
      <Helmet>
        {preconnect.map((url, key) => {
          return <link rel="preconnect" href={url} key={key}></link>;
        })}
      </Helmet>
      <FacebookPixel />
      <CustomerChat />
    </>
  );
};

export default Layout;
