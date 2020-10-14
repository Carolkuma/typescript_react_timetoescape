import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoIcon from "../../svg/LogoIcon";
import { NavigationButton } from "../NavigationButton";
import { isMobile } from 'react-device-detect';
import { Link } from 'gatsby';
import { BookingButton } from "../BookingButton";
import {header} from '../../../content/home/common/navigation.json'


interface props {
  showNav?: boolean,
  children?: JSX.Element | JSX.Element[] | string,
  isHome: boolean,
}

const style = {
  borderColor: "rgb(189 189 189)",
};

const headerStyles = (isOpen: boolean) => {
  return {
    maxHeight: `${isOpen ? "100vh" : "4rem"}`,
    transition: "max-height 0.3s ease-in-out",
  };
};


const getLinkClass = (className: string): string => `block border-solid lg:border-none border-b border-orange-400 py-4 lg:inline-block lg:py-0 tex-bold anchor px-3 w-full lg:w-auto text-white ${className}`


const Header = ({showNav, isHome }: props) => {
  const [isOpen, setOpen] = useState(false);
  const offset = !isMobile ? 100 : 350

  return (
    <header
      style={headerStyles(isOpen)}
      className={`overflow-hidden sticky z-20 top-0 bg-dark shadow text-orange-400 border-b border-gray-800 print:bg-white`}
    >
      <nav className="container mx-auto flex flex-row-reverse lg:flex-row items-center justify-between flex-wrap p-3">
        <div className="flex items-center flex-shrink-0 text-white">
          {isHome ? (
            <AnchorLink
              offset={offset}
              className="lg:w-200 anchor"
              href={"#intro"}
              aria-label="Navigate to home"
            >
              <LogoIcon />
            </AnchorLink>
          ) : (
            <Link to="/#into">
              <LogoIcon />
            </Link>
          )}
        </div>

        <NavigationButton
          className="block lg:hidden pl-3 py-2"
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
        />

        <div
          className={`mt-4 lg:mt-0 w-full block lg:block flex-grow lg:flex lg:items-center lg:w-auto`}
        >
          {showNav && header.length !== 0 && (
            <div className="text-sm lg:flex-grow text-center print:hidden">
              {header.map((link, key) =>
                isHome ? (
                  <AnchorLink
                    offset={offset}
                    key={key}
                    style={style}
                    className={getLinkClass(link.className)}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </AnchorLink>
                ) : (
                  <Link
                    to={`/${link.href}`}
                    key={key}
                    style={style}
                    className={getLinkClass(link.className)}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
          <div
            className={`lg:block relative mx-auto my-5  lg:my-0`}
          >
            <BookingButton/>
          </div>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  isRegistrationEnabled: true,
  showNav: true,
};

export default Header;
