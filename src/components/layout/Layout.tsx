import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface props {
  isRegistrationEnabled?: boolean,
  showNav?: boolean,
  children: JSX.Element | JSX.Element[] | string,
}



const Layout = ({ children, isRegistrationEnabled, showNav }: props) => {
  return (
    <>
      <div className="content">

      <Header showNav={showNav} isRegistrationEnabled={isRegistrationEnabled}/>
      <main className="text-gray-900">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
