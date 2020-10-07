import React from 'react';
import { Link } from 'gatsby';

const getCopyright = (startYear = 2020) => {
  const toYear = new Date().getFullYear()
  const copyrightDate = startYear === toYear ? `${startYear}` : `${startYear}- ${toYear}` 
  return `© ${copyrightDate}`
}




const FOOTER_NAVIGATION = [
  {
    link: "/pravidla-hry/",
    label: "Pravidlá hry",
  },
  {
    link: "/privacy-policy/",
    label: "Ochrana osobných údajov",
  },
];



const Footer = () => (
  <footer className="bg-dark text-gray-100 print:bg-white print:text-gray-500">
    <div className="container mx-auto  px-3 flex flex-col md:flex-row-reverse text-center">
      <nav className="print:hidden mt-5 md:py-5 flex flex-col md:flex-row ">
        {
          FOOTER_NAVIGATION.map(({link, label}, i) => 
          <Link to={link} activeClassName="text-orange-400" className="text-center md:ml-5 px-3 pb-5 md:pb-0 block md:flex" key={i}>
               {label}
             </Link>
          )
        }
      </nav>
      <span className="flex-grow md:text-left mb-5 md:py-5">{getCopyright()} Time to escape</span>
    </div>
  </footer>
);

export default Footer;
