import { Link } from "gatsby";
import { throttle } from "lodash";
import { PropsWithChildren, useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import "twin.macro";
import tw from "twin.macro";
import nav from "../../../../content/home/common/navigation.json";
import LogoIcon from "../../../svg/LogoIcon";
import { HeaderContainer } from "./HeaderContainer";
import { NavContainer } from "./NavContainer";
import { NavigationButton } from "./NavigationButton";
import ScrollIndicator from "./ScrollIndicator";

const { header } = nav;

const roundToEven = (n: number): number => 2 * Math.round(n / 2);

const SidePart = styled.div`
  flex: none;
  @media (prefers-color-scheme: dark) {
    color: var(--main-color);
  }
`;

const PhoneLink = styled.a`
  text-align: center;
  ${tw`mt-5 w-full lg:mt-0 lg:w-auto`}
`;

const CenterPart = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
  ${tw`mt-5  flex-col lg:flex-row lg:mt-0 lg:w-auto`}
`;

const NavigationLink = styled.div`
  ${tw`border-solid lg:border-none border-b py-4 lg:py-0 px-3 w-full lg:w-auto`}
  border-color: "rgb(189 189 189)";
  @media (prefers-color-scheme: dark) {
    color: var(--color-fg);
  }
`;

interface Props extends PropsWithChildren {
  isHome: boolean;
  showNav?: boolean;
  changeBgOpacity?: boolean;
}

const Header = ({ showNav = true, isHome, changeBgOpacity = false }: Props) => {
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

  return (
    <HeaderContainer
      isOpen={isOpen}
      changeBgOpacity={changeBgOpacity}
      isScrolled={scrollTopPercentage > 0}
    >
      <NavContainer as={"nav"}>
        {isHome ? (
          <AnchorLink
            offset={offset}
            className="anchor"
            href={"#intro"}
            aria-label="Navigate to home"
            as={SidePart}
          >
            <LogoIcon />
          </AnchorLink>
        ) : (
          <SidePart to="/#into" as={Link}>
            <LogoIcon />
          </SidePart>
        )}
        <NavigationButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <CenterPart>
          {showNav &&
            header.length !== 0 &&
            header.map((link, key) =>
              isHome ? (
                <NavigationLink
                  offset={offset}
                  key={key}
                  className="anchor"
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  as={AnchorLink}
                >
                  {link.label}
                </NavigationLink>
              ) : (
                <NavigationLink
                  as={Link}
                  to={`/${link.href}`}
                  key={key}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavigationLink>
              )
            )}
        </CenterPart>
        <SidePart href="tel:+421951406635" as={PhoneLink}>
          +421 951 406 635
        </SidePart>
      </NavContainer>
      <ScrollIndicator scrollTopPercentage={scrollTopPercentage} />
    </HeaderContainer>
  );
};

export default Header;
