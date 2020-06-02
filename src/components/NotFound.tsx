import React from "react";
import Button from "./Button";
import { Link } from 'gatsby';

export const NotFound = () => (
         <section className="py-20">
           <div className="container mx-auto lg:flex">
             <div className="text-center flex-1 lg:w-1/2">
               <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                 404 - Stránka nenájdená
               </h1>
               <p className="text-xl lg:text-2xl mt-6 font-light">
                 Stránku ktorú hľadáte sme nenašli.
               </p>
               <p className="mt-8 md:mt-12">
                    <Link to="/">
                        <Button size="lg" >Pokračovať</Button>
                    </Link>
               </p>
             </div>
           </div>
         </section>
       );
