import React from 'react';

const getCopyright = (startYear = 2020) => {
  const toYear = new Date().getFullYear()
  const copyrightDate = startYear === toYear ? `${startYear}` : `${startYear}- ${toYear}` 
  return `© ${copyrightDate}`
}


const Footer = () => <footer className="bg-black mx-auto py-5 text-center text-gray-100">
    {getCopyright()} Time to escape
  </footer>

export default Footer;
