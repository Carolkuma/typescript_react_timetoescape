import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LogoIcon from "../../../svg/LogoIcon";
import { NavigationButton } from "./NavigationButton";
import { isMobile } from "react-device-detect";
import { Link } from "gatsby";
import { BookingButton } from "../../BookingButton";
import nav from "../../../../content/home/common/navigation.json";
import { throttle } from "lodash";
import "twin.macro";
import ScrollIndicator from "./ScrollIndicator";
import { NavContainer } from "./NavContainer";
import { HeaderContainer } from "./HeaderContainer";

const { header } = nav;
interface props {
  showNav?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  changeBgOpacity?: boolean;
  isHome: boolean;
}

const style = {
  borderColor: "rgb(189 189 189)",
};

const headerStyles = (isOpen: boolean) => {
  return {
    maxHeight: `${isOpen ? "100vh" : "5rem"}`,
    transition:
      "max-height 0.3s ease-in-out, background-color 0.6s ease-in-out ",
  };
};

const roundToEven = (n: number): number => 2 * Math.round(n / 2);

const getLinkClass = (className: string | undefined): string => ` ${className}`;

const Header = ({ showNav, isHome, changeBgOpacity }: props) => {
  const getPercentage = () => {
    const isSSR = typeof window === "undefined";

    if (isSSR) {
      return 0;
    }

    if (
      typeof window !== "undefined" &&
      window.pageXOffset === document.body.clientHeight - window.innerHeight
    ) {
      return 100;
    }
    const per =
      (window.pageYOffset / (document.body.clientHeight - window.innerHeight)) *
      100;
    return roundToEven(Math.round(per));
  };

  const [scrollTopPercentage, setScrollTopPercentage] = useState(
    getPercentage()
  );
  const [isOpen, setIsOpen] = useState(false);

  const offset = !isMobile ? 100 : 350;

  const checkScrollTop = () => {
    const percentage = getPercentage();
    setScrollTopPercentage(percentage);
  };

  useEffect(() => {
    const listener = throttle(checkScrollTop, 15).bind(this);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const scrolledClass =
    scrollTopPercentage > 0 || isOpen || !changeBgOpacity
      ? `border-b`
      : `bg-opacity-50`;

  return (
    <HeaderContainer isOpen={isOpen}>
      <NavContainer as={"nav"}>
        <div tw="flex items-center flex-shrink-0 text-white">
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

        <NavigationButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <div tw="mt-4 lg:mt-0 w-full block lg:block flex-grow lg:flex lg:items-center lg:w-auto">
          {showNav && header.length !== 0 && (
            <div tw="mt-4 lg:mt-0 w-full text-sm lg:flex-grow text-center print:hidden">
              {header.map((link, key) =>
                isHome ? (
                  <AnchorLink
                    offset={offset}
                    key={key}
                    style={style}
                    tw="block border-solid lg:border-none border-b py-4 lg:inline-block lg:py-0 px-3 w-full lg:w-auto text-white"
                    className={[link.className, "anchor"]}
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
                    tw="block border-solid lg:border-none border-b py-4 lg:inline-block lg:py-0 px-3 w-full lg:w-auto text-white"
                    className={[link.className, "anchor"]}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <div tw="lg:block relative mx-auto my-5 lg:my-0">
          <a href="tel:+421951406635">+421 951 406 635</a>
          <BookingButton />
        </div>
      </NavContainer>
      <ScrollIndicator scrollTopPercentage={scrollTopPercentage} />
    </HeaderContainer>
  );
};

Header.defaultProps = {
  isRegistrationEnabled: true,
  showNav: true,
  changeBgOpacity: false,
};

export default Header;
