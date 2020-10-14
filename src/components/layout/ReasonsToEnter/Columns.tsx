
import React from 'react';
import Card from '../../Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from '../../getIcon';

export interface ReasonToEnter {
  title: string,
  description: string,
  icon: string,
}



interface props {
  reasons: ReasonToEnter[]
}

export const Columns = ({reasons}: props) => (
         <div className="flex flex-col lg:flex-row lg:-mx-3 lg:mt-20 text-center">
           {reasons.map(({ title, description, icon }, index) => (
             <div className="flex-1 px-5" key={index}>
               <Card className="p-5 h-full mt-10 lg:mt-0">
                 <div className="text-6xl text-center mb-3">
                   <FontAwesomeIcon icon={getIcon(icon)} fixedWidth />
                 </div>
                 <p className="text-2xl alt-font text-xl">{title}</p>
                 <p className="mt-5 mb-3">{description}</p>
               </Card>
             </div>
           ))}
         </div>
       );

