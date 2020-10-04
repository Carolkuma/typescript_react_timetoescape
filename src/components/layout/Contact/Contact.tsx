import React from 'react'
import Card from '../../Card'
import { GMap } from "../../Map/Map";
import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactCard } from './ContactCard';
import { Social } from '../../Social';


const navigateToGoogleLink =
  "https://www.google.com/maps/place/Zimn%C3%A1+196,+052+01+Spi%C5%A1sk%C3%A1+Nov%C3%A1+Ves/@48.9430553,20.5655161,17z/data=!3m1!4b1!4m5!3m4!1s0x473e4ed643f75155:0x8044b62f996bb4bc!8m2!3d48.9430553!4d20.5677048";

export const Contact = () => {
    return (
      <section id="contact" className="mt-20 pb-20 container mx-auto">
        <h2 className="text-3xl lg:text-4xl alt-font text-center mb-20">
          Kontakt
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
          <ContactCard icon={faClock} title="Otváracia doba">
            <span>PO - PI 16:00 - 22:00</span>
            <br />
            <span>SO - NE 9:00 - 22:00</span>
          </ContactCard>
          <ContactCard icon={faPhone} title="Telefónne číslo">
            <a href="tel:+421951406635">+421 951 406 635</a>
          </ContactCard>
          <ContactCard icon={faEnvelope} title="Emailová adresa">
            <a href="mailto:rezervacia@timetoescape.sk">
              rezervacia@timetoescape.sk
            </a>
          </ContactCard>
        </div>

        <Card className="md:flex md:flex-row md:flex-row-reverse mt-10 overflow-hidden">
          <div className="w-full text-center md:text-left lg:w-1/3 p-10">
            <div className="uppercase tracking-wider font-bold mb-5">Time to escape</div>
            <p className="mb-5">
              Zimná 61,
              <br />
              052 01 Spišská Nová Ves <br />
            </p>
            <Social />
          </div>
          <div className="flex-auto lg:flex-1  ">
            <GMap
              coordinates={{ lat: 48.94326, lng: 20.56778 }}
              label="Otvoriť v mapách"
              link={navigateToGoogleLink}
            ></GMap>
          </div>
        </Card>
      </section>
    );
}
