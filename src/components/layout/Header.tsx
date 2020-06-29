import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Links = [
  {
    label: "Miestnosti",
    href: "#rooms",
  },
  {
    label: "Referencie",
    href: "#testimonials",
  },
  // {
  //   label: 'Cenník',
  //   href: '',
  // },
  {
    label: "Faq",
    href: "#faq",
  },
  {
    label: "Kontakt",
    href: "#contact",
  },
];


interface props {
  isRegistrationEnabled?: boolean,
  showNav?: boolean,
  children?: JSX.Element | JSX.Element[] | string,
}


const Header = ({ isRegistrationEnabled, showNav}: props) => (
  <header className={`sticky z-20 top-0 bg-dark shadow text-orange-400 ${isRegistrationEnabled === false && showNav ===false && 'text-center'}`}>
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4">
      <div className="flex items-center text-2xl font-extrabold">
       
        <AnchorLink className="w-12 mr-3" href={'/'}>  
           <LogoIcon /> 
        </AnchorLink>
      </div>

       {
        showNav && <div className="flex mt-4 sm:mt-0">
          {
            Links.map(link =>
              <AnchorLink className="px-4 tex-bold" href={link.href}>
                {link.label}
              </AnchorLink>
            )
          }
        </div>
       }

       {
        isRegistrationEnabled && <div className="hidden md:block">
          <Button href="https://time-to-escape-escape-room.reservio.com/" className="text-sm">Rezervácia</Button>
        </div>
       }
     
    </div>
  </header>
);

Header.defaultProps = {
  isRegistrationEnabled: true,
  showNav: true,
}

export default Header;
