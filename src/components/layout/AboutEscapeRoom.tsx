import React from "react";

import {title, content} from '../../../content/home/about.json'
const style = {
  backgroundImage: "url(./bg/about.jpg)",
};

export const AboutEscapeRoom = () => (
         <section
           id="about"
           className="py-20 text-gray-100 bg-styles"
           style={style}
         >
           <div className="container mx-auto px-3">
             <h2 className="text-3xl lg:text-4xl alt-font text-center">
              {title}
             </h2>
             <div className="mt-10 text-center lg:w-2/3 mx-auto text-justify">
               <p className="md:text-lg ">
                 {content}
               </p>
             </div>
           </div>
         </section>
       );

