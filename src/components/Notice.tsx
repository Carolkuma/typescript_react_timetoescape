import React from "react";

import {title , description} from '../../content/home/notice.json'
export const Notice = () => <section id="koronavirus" className="my-20 container mx-auto">
        <h2 className="text-3xl lg:text-4xl alt-font text-center px-3">{title}</h2>
        <div className="mt-10 text-center lg:w-2/3 mx-auto text-justify">
               <p className="md:text-lg ">
                 {description}
               </p>
             </div>
</section>