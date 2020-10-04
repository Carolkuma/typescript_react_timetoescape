
import React from 'react';
import Card from '../../Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faUserFriends, 
  faGift,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { faBuilding, } from "@fortawesome/free-regular-svg-icons"

export interface ReasonToEnter {
  heading: string,
  description: string,
  icon: IconDefinition,
}

const reasons: ReasonToEnter[] = [
  {
    heading: "Teambuilding",
    description:
      "Akonáhle sa začne odpočítavanie, je to všetko o spolupráci a komunikácií.",
    icon: faBuilding,
  },
  {
    heading: "Priateľov a rodinu",
    description:
      "Ak vaši priatelia nemajú čas, príďte s rodinou! Či tak alebo onak, určite sa zasmejete a zistíte, kto je v čom lepší.",
    icon: faUserFriends,
  },
  {
    heading: "Turistov",
    description:
      "Spiš má pekné miesta k videniu, ale ak hľadáte niečo neobvyklé ESCAPE ROOM je tu.",
    icon: faRoute,
  },
  {
    heading: "Oslavy",
    description:
      "Narodeniny, stretávky zo školy, návšteva…alebo možno je to len piatok. My sme vždy hľadali dôvod oslavovať.",
    icon: faGift,
  },
];

interface props {
  reasons: ReasonToEnter[]
}


export const Columns = () => (
         <div className="flex flex-col lg:flex-row lg:-mx-3 lg:mt-20 text-center">
           {reasons.map(({ heading, description, icon }, index) => (
             <div className="flex-1 px-5" key={index}>
               <Card className="p-5 h-full mt-10 lg:mt-0">
                 <div className="text-6xl text-center mb-3">
                   <FontAwesomeIcon icon={icon} fixedWidth />
                 </div>
                 <p className="text-2xl alt-font text-xl">{heading}</p>
                 <p className="mt-5 mb-3">{description}</p>
               </Card>
             </div>
           ))}
         </div>
       );

