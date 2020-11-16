import React from "react";
import Button, { ButtonElement } from '../Button';
import AnchorLink from "react-anchor-link-smooth-scroll";


import { MainPageSection } from "../MainPageSection";




import {title, description, buttonlabel, backgroundImage} from '../../../content/home/intro.json'
import { header } from '../../../content/home/common/navigation.json'

const firstAnchor = header[0].href



export const Intro = () => {             
           return (
             <MainPageSection
               id="intro"
               imageSrc={backgroundImage}
               videoEnabled={false}
             >
               <div className="text-center flex-1">
                 <h1 className="text-4xl lg:text-5xl xl:text-6xl leading-none alt-font">
                   {title}
                 </h1>
                 <p className="text-xl lg:text-2xl mt-6 font-light mb-8 md:mb-12">
                   {description}
                 </p>
                 <AnchorLink href={firstAnchor}>
                   <Button size="lg" element={ButtonElement.DIV}>
                     {buttonlabel}
                   </Button>
                 </AnchorLink>
               </div>
             </MainPageSection>
           );
       
            }