import React from "react";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from "../../Card";
interface props {
    title: string,
    icon: IconDefinition,
    children: JSX.Element | JSX.Element[] | string
}

export const ContactCard = ({ icon, children, title }: props) => (
         <Card className="px-10 py-5 grid text-center grid-cols-3  md:grid-cols-2 lg:grid-cols-3 gap-5">
           <div className="text-center self-center text-3xl md:text-4xl col-span-3 md:col-span-1 lg:col-span-3  xl:col-span-1">
             <FontAwesomeIcon icon={icon} />
           </div>
           <div className="self-center col-span-3 md:col-span-1 lg:col-span-3 xl:col-span-2">
             <span className="uppercase tracking-wider">{title}</span>
             <br />
             {children}
           </div>
         </Card>
       );