import React from "react";
import { Card } from "../../Card";
import { GMap } from "../../Map/Map";
import { ContactCard } from "./ContactCard";
import { Social } from "../../Social";
import contact from "../../../../content/home/contact.json";
import { getIcon } from "../../getIcon";
import "twin.macro";
const { title, address, map, info } = contact;

const createMarkup = (content: string) => {
  return { __html: content };
};

export const Contact = () => {
  return (
    <section
      id="contact"
      tw="pt-10 pb-20 md:pb-0  mx-auto"
      className="container"
    >
      <h2 tw="text-3xl lg:text-4xl text-center mb-10" className="alt-font">
        {title}
      </h2>
      <div tw="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
        {info.map((info, key) => {
          return (
            <ContactCard key={key} icon={getIcon(info.icon)} title={info.title}>
              <div dangerouslySetInnerHTML={createMarkup(info.content)}></div>
            </ContactCard>
          );
        })}
      </div>

      <Card tw="px-5 md:px-0 md:flex md:flex-row md:flex-row-reverse mt-10 md:-mb-32 overflow-hidden bg-white relative z-10">
        <div tw="w-full text-center md:text-left lg:w-1/3 p-10">
          <div tw="uppercase tracking-wider font-bold mb-5">
            {address.title}
          </div>
          <address tw="mb-3" style={{ whiteSpace: "pre-line" }}>
            <p>{address.mail}</p>
          </address>
          <Social />
        </div>
        <div tw="flex-auto lg:flex-1  ">
          <GMap
            coordinates={map.coordinates}
            label={map.label}
            link={map.googleMapsLink}
          ></GMap>
        </div>
      </Card>
    </section>
  );
};
