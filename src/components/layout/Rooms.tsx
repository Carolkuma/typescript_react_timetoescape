import React from "react";
import SplitSection from '../SplitSection'
import Button from '../Button'
import SVGImpossible from '../../svg/Impossible';
import HeroImage from '../../svg/HeroImage';


const ROOMS = [{
  title: 'Mission Imposible',
  description: `Vyberal si vždy nesplniteľné misie? Aj napriek tomu si uspel ?
                Na začiatku tejto miestnosti si v úplne novej situácii.Niečo
                nevyšlo a je len na tebe aby si so svojím teamom zachránil svet.`,
  href: '',
}]


const getReverseOrder = i => (i + 2 ) % 2 > 0

export const Rooms = () => {
    return (
      <section id="rooms" className="mt-20 container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">
          Miestnosti
        </h2>
        <div className="grid grid-cols-3">
          {ROOMS.map(({ title, description }, index) => {
            return (
              <SplitSection
                primarySlot={
                  <>
                    <h3 className="text-3xl font-semibold leading-tight">
                      {title}
                    </h3>
                    <p className="mt-8 text-xl font-light leading-relaxed">
                      {description}
                    </p>
                    <Button className="mt-8">Vstúpiť</Button>
                  </>
                }
                secondarySlot={
                  <img src="/Impossible.svg"></img>
                }
                key={index}
                reverseOrder={getReverseOrder(index)}
              />
            );
          })}
        </div>
      </section>
    );}
