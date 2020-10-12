import React from "react";
import Button from '../Button'

import * as data  from '../../../content/home/rooms.json'
import { BookingButton } from "../BookingButton";

declare module 'react' {
     interface HTMLProps<T> {
        async?:boolean;
    }    
}



export const Rooms = () => {
    return (
      <section id="rooms" className="mt-20 container mx-auto">
        <h2 className="text-3xl lg:text-4xl alt-font text-center">
        {data.title}
        </h2>
        <div className="">
          {data.rooms.map(({ title, description, href, image }, index) => {
            
            return (
                <div
                  className={`text-center md:text-left md:flex ${
                    index % 2 == 0 ? "md:flex-row-reverse" : ""
                  }`}
                  key={index}
                >
                  <div className="w-full md:1/2 lg:w-1/3 self-center p-5">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-1/2 mx-auto md:w-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:1/2 lg:w-2/3 self-center p-5">
                    <h3 className="text-3xl alt-font">{title}</h3>
                    <p className="mt-6 mb-10 md:text-lg">{description}</p>
                    <BookingButton/>
                  </div>
                </div>
            );
          })}
        </div>
      </section>
    );}
