import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTripadvisor } from '@fortawesome/free-brands-svg-icons'


const style = {
    marginLeft: '-8px' 
}
const socialIcons = [
  {
    icon: faFacebookSquare,
    link: "https://www.facebook.com/Time-To-Escape-112481290497040/",
    alt: "Nasledujte nás na Facebooku",
  },
  {
    icon: faInstagramSquare,
    link: "https://www.instagram.com/escaperoom_snv/",
    alt: "Nasledujte nás na Instagrame",
  },
  {
    icon: faTripadvisor,
    link:
      "https://www.tripadvisor.sk/Attraction_Review-g274942-d21071930-Reviews-Time_To_Escape_Escape_Room-Spisska_Nova_Ves_Kosice_Region.html?m=19905",
    alt: "Tripadvisor",
  },
];


export const Social = () =>
         socialIcons.map(({ link, icon, alt }, key) => (
           <a
             href={link}
             key={key}
             target="_blank"
             rel="noopener noreferrer"
             className="text-4xl mr-5"
             style={style}
             aria-label={alt}
             title={alt}
           >
             <FontAwesomeIcon icon={icon} fixedWidth />
           </a>
         ));