import React, { useEffect, useLayoutEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoIcon from "../../svg/LogoIcon";
import { NavigationButton } from "../NavigationButton";
import { isMobile } from 'react-device-detect';
import { Link } from 'gatsby';
import { BookingButton } from "../BookingButton";
import {header} from '../../../content/home/common/navigation.json'
import {throttle} from 'lodash'

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
    maxHeight: `${isOpen ? "100vh" : "5rem"}`,
    transition: "max-height 0.3s ease-in-out, background-color 0.6s ease-in-out ",
  };
};


const roundToEven = (n:number): number => 2 * Math.round(n / 2);

const getLinkClass = (className: string | undefined): string => `block border-solid lg:border-none border-b border-orange-400 py-4 lg:inline-block lg:py-0 tex-bold anchor px-3 w-full lg:w-auto text-white ${className}`

const Header = ({showNav, isHome }: props) => {
  
  const getPercentage = () => {
    const per = (window.pageYOffset / (document.body.clientHeight - window.innerHeight)) * 100 
    return roundToEven(Math.round(per)); 

  }
  
  // const [state, setState] = useState({
  //   isOpen: false,
  //   scrollTopPercentage: getPercentage(),
  // });
  
  const [scrollTopPercentage, setScrollTopPercentage] = useState(0);

  const setIsOpen = (value: boolean) => {
    // const newState = Object.assign(state)
    // newState.isOpen = value
    // setState(newState)
  }


  // const setScrollTopPercentage = (value: number) => {
  //   const newState = Object.assign(state)
  //   newState.scrollTopPercentage = value
  //   setState(newState)
  // }


  const offset = !isMobile ? 100 : 350

  const checkScrollTop = () => {
    const percentage = getPercentage()
    setScrollTopPercentage(percentage)
  }

  const state = {
    isOpen: false
  }

  let ref: null | void = null
  
  useEffect(() => {

    const listener = throttle(checkScrollTop, 15).bind(this);
    window.addEventListener("scroll", listener);
    return (() => {
      window.removeEventListener("scroll", listener);
    })
  }, []);


  const scrolledClass = scrollTopPercentage > 0 ? `border-b` : `bg-opacity-50`;
 

  return (
    <header
      style={headerStyles(state.isOpen)}
      className={`overflow-hidden fixed w-full z-20 top-0 bg-dark shadow text-orange-400 border-gray-800 print:bg-white ${scrolledClass}`}
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
          isOpen={state.isOpen}
          onClick={() => setIsOpen(!state.isOpen)}
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
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </AnchorLink>
                ) : (
                  <Link
                    to={`/${link.href}`}
                    key={key}
                    style={style}
                    className={getLinkClass(link.className)}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <div className={`lg:block relative mx-auto my-5  lg:my-0`}>
          <BookingButton />
        </div>
      </nav>
      <div
        style={{
          width: `${scrollTopPercentage}%`,
          height: 3,
          transition: `width .2 ease-in-out`,
        }}
        className="bg-orange-400"
      ></div>
    </header>
  );
};

Header.defaultProps = {
  isRegistrationEnabled: true,
  showNav: true,
};

export default Header;
