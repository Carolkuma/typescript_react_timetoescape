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
         <Card className="p-10 grid grid-cols-2 lg:grid-cols-3 gap-5">
           <div className="text-4xl text-center lg:col-span-1">
             <FontAwesomeIcon icon={icon} />
           </div>
           <div className="lg:col-span-2">
             <span className="uppercase tracking-wider">
               {title}
             </span>
             <br />
             {children}
           </div>
         </Card>
       )