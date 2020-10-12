import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {sites} from '../../content/home/common/social.json'
import { getIcon } from './getIcon';

const style = {
    marginLeft: '-8px' 
}
 
export const Social = () => sites.map(({ link, icon, alt }, key) => (
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
             <FontAwesomeIcon icon={getIcon(icon)} fixedWidth />
           </a>
         ))