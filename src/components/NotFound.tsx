import React from "react";
import Button from "./Button";
import { Link } from 'gatsby';
import {title, description , button} from '../../content/home/common/notfound.json'

export const NotFound = () => (
         <section className="py-20">
           <div className="container mx-auto lg:flex">
             <div className="text-center flex-1 lg:w-1/2">
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
