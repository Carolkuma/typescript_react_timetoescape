import React from "react";
import Button from '../Button';
import loadable from "@loadable/component";

const BackgroundVideo = loadable(() => import("../BackgroundVideo"));

const getBgStyle = {
  backgroundColor: "rgba(237, 242, 247, 0.60)"
}

const videoEnabled = true

export const Intro = () => {             
         return (
           <section className="relative bg-gray-400">
             <div className="relative z-10" style={getBgStyle}>
               <div className="container mx-auto px-8 flex  py-20 z-10">

                 <div className="text-center flex-1">
                   <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                     Nezabudnuteľný zážitok
                 </h1>
                   <p className="text-xl lg:text-2xl mt-6 font-light">
                     Zaži dobrodružstvo spolupracuj a unikni.
                 </p>
                   <p className="mt-8 md:mt-12">
                     <Button size="lg">Vstúpiť</Button>
                   </p>
                 </div>
             </div>
             </div>

             {
               videoEnabled && <BackgroundVideo/>


             }
             
               
                
           </section>
         );
       
            }