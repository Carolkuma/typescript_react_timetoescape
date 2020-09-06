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
    <div className="container mx-auto py-5 px-3 flex">
      <span className="flex-grow">{getCopyright()} Time to escape</span>
      <nav className="print:hidden">
        {
          FOOTER_NAVIGATION.map(({link, label}, i) => 
             <Link to={link} activeClassName="text-orange-400" className="ml-5 px-3" key={i}>
               {label}
             </Link>
          )
        }
      </nav>
    </div>
  </footer>
);

export default Footer;
