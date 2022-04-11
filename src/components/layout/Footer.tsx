import React from "react";
import { Link } from "gatsby";
import nav from "../../../content/home/common/navigation.json";
import "twin.macro";

const { footer } = nav;
const FOOTER_NAVIGATION = footer;

const getCopyright = (startYear = 2020) => {
  const toYear = new Date().getFullYear();
  const copyrightDate =
    startYear === toYear ? `${startYear}` : `${startYear} - ${toYear}`;
  return `© ${copyrightDate}`;
};

const Footer = () => (
  <footer tw="bg-dark text-gray-100 print:bg-white print:text-gray-500">
    <div tw="container mx-auto  px-3 flex flex-col md:flex-row-reverse text-center">
      <nav tw="print:hidden py-5 flex flex-col md:flex-row ">
        {FOOTER_NAVIGATION.map(({ link, label }, i) => (
          <Link
            to={link}
            activeClassName="text-orange-400"
            tw="text-center md:ml-5 px-3 pb-5 md:pb-0 block md:flex"
            key={i}
          >
            {label}
          </Link>
        ))}
      </nav>
      <span tw="flex-grow md:text-left mb-5 md:py-5">
        {getCopyright()} Time to escape
      </span>
    </div>
  </footer>
);

export default Footer;
