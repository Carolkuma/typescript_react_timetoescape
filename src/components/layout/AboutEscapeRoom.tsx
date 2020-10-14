import React from "react";

import {title, id, description, backgroundImage} from '../../../content/home/about.json'
import { MainPageSection } from "../MainPageSection";


export const AboutEscapeRoom = () => (
         <MainPageSection
           id={id}
           imageSrc={backgroundImage}
         >
           <div className="container mx-auto px-3">
             <h2 className="text-3xl lg:text-4xl alt-font text-center">
              {title}
             </h2>
             <div className="mt-10 text-center lg:w-2/3 mx-auto text-justify">
               <p className="md:text-lg ">
                 {description}
               </p>
             </div>
           </div>
         </MainPageSection>
       );

