import React from "react";
import Button from "./Button";
import { Link } from 'gatsby';
import {title, description , button} from '../../content/home/common/notfound.json'
import UndrawNotFound from "./ReactSvgs/UndrawNotFound";

export const NotFound = () => (
         <section className="py-20 flex items-center">
           <div className="container mx-auto p-4 flex flex-wrap items-center">
             <div className="w-full flex md:w-5/12 text-center p-10">
               <UndrawNotFound />
             </div>
             <div className="w-full md:w-7/12 text-center md:text-left p-10">
               <h1 className="text-4xl lg:text-5xl xl:text-6xl alt-font leading-none">
                 {title}
               </h1>
               <p className="text-xl lg:text-2xl mt-6 font-light">
                 {description}
               </p>
               <p className="mt-8 md:mt-12">
                 <Link to="/">
                   <Button size="lg">{button}</Button>
                 </Link>
               </p>
             </div>
           </div>
         </section>
       );
