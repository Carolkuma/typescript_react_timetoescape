import React from "react";
import Button, { ButtonElement } from '../Button';
import AnchorLink from "react-anchor-link-smooth-scroll";

import loadable from "@loadable/component";

const BackgroundVideo = loadable(() => import("../BackgroundVideo"));

const videoEnabled = true

export const Intro = () => {             
           return (
           <section id="intro" className="relative bg-gray-400">
             <div className="relative z-10 alt-bg" >
               <div className="container mx-auto px-8 flex  py-20 z-10">
                 <div className="text-center flex-1">
                   <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                     Nezabudnuteľný zážitok
                   </h1>
                   <p className="text-xl lg:text-2xl mt-6 font-light mb-8 md:mb-12">
                     Zaži dobrodružstvo spolupracuj a unikni.
                   </p>
                   <AnchorLink href="#features">
                     <Button size="lg" element={ButtonElement.DIV}>
                       Vstúpiť
                     </Button>
                   </AnchorLink>
                 </div>
               </div>
             </div>

             {videoEnabled && <BackgroundVideo />}
           </section>
         );
       
            }