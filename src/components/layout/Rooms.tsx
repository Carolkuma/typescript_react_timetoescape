import React from "react";
import Button from '../Button'

declare module 'react' {
     interface HTMLProps<T> {
        async?:boolean;
    }    
}

const ROOMS = [
  {
    title: "Mission Imposible",
    description: `Aký je to pocit, byť v tíme špiónov ktorých odhalila zločinecká organizácia ktorú mali sledovať? Byť spútaný v neznámom priestore a byť poslednou šancou na odvrátenie katastrofy? Dokážeš so svojím tímom vyriešiť všetky nástrahy včas aby si zachránil mnoho životov?`,
    href: "https://time-to-escape-escape-room.reservio.com/booking",
  },
];

export const Rooms = () => {
    return (
      <section id="rooms" className="mt-20 container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center">
          Miestnosti
        </h2>
        <div className="">
          {ROOMS.map(({ title, description, href }, index) => {
            
            return (
                <div
                  className={`text-center md:text-left md:flex ${
                    index % 2 == 0 ? "md:flex-row-reverse" : ""
                  }`}
                  key={index}
                >
                  <div className="w-full md:1/2 lg:w-1/3 self-center p-5">
                    <img
                      src="/Impossible.svg"
                      alt="Misson impossible escape room"
                      className="w-1/2 mx-auto md:w-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full md:1/2 lg:w-2/3 self-center p-5">
                    <h3 className="text-3xl font-bold">{title}</h3>
                    <p className="mt-6 mb-10 md:text-lg">{description}</p>
                    <Button href={href} target="_blank"  className="w-full">
                      Rezervácia
                    </Button>
                  </div>
                </div>
            );
          })}
        </div>
      </section>
    );}
