import React from 'react'
import Card from '../../Card'
import { GMap } from "../../Map/Map"
import { ContactCard } from './ContactCard'
import { Social } from '../../Social'
import { title, address, map, info } from '../../../../content/home/contact.json'
import { getIcon } from '../../getIcon';


const createMarkup = (content: string) => {
  return {__html: content};
}

export const Contact = () => {
    return (
      <section id="contact" className="mt-20 pb-20 md:pb-0 container mx-auto">
        <h2 className="text-3xl lg:text-4xl alt-font text-center mb-20">
          {title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {

            info.map((info, key) => {
              return <ContactCard icon={getIcon(info.icon)} title={info.title}>
                    <div dangerouslySetInnerHTML={createMarkup(info.content)}></div>
              </ContactCard>
            })
          }
        </div>

        <Card className="px-5 md:px-0 md:flex md:flex-row md:flex-row-reverse mt-10 md:-mb-32 overflow-hidden bg-white relative z-10">
          <div className="w-full text-center md:text-left lg:w-1/3 p-10">
            <div className="uppercase tracking-wider font-bold mb-5">{address.title}</div>
          <address className="mb-3" style={{whiteSpace: "pre-line"}}>
            <p>
              {address.mail}
            </p>
          </address>
            <Social />
          </div>
          <div className="flex-auto lg:flex-1  ">
            <GMap
              coordinates={map.coordinates}
              label={map.label}
              link={map.googleMapsLink}
            ></GMap>
          </div>
        </Card>
      </section>
    );
}
