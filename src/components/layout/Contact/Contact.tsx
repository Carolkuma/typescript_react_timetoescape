import React from 'react'
import Card from '../../Card'
import { GMap } from "../../Map/Map";

import { faClock, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { ContactCard } from './ContactCard';

export const Contact = () => {
    return (
      <section id="contact" className="py-20 container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center mb-20">
          Kontakt
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-10">
          <ContactCard icon={faClock} title="Otváracia doba">
            <span>PO - PI 16:00 - 22:00</span><br/>
            <span>SO - NE  9:00 - 22:00</span>
          </ContactCard>
          <ContactCard icon={faPhone} title="Telefónne číslo">
            <a href="tel:+421 951 406 635">+421 951 406 635</a>
          </ContactCard>
          <ContactCard icon={faEnvelope} title="Emailová adresa">
            <a href="mailto:rezervacia@timetoescape.sk">rezervacia@timetoescape.sk</a>
          </ContactCard>
        </div>

        <Card className="grid grid-cols-1 lg:grid-cols-3 mt-10 overflow-hidden">
          <div className="lg:col-span-2">
            <GMap coordinates={{ lat: 48.9429886, lng: 20.5683209 }} label="Otvoriť v mapách"></GMap>
          </div>
          <div className="lg:col-span-1 p-10">
            <div className="uppercase tracking-wider  mb-5">
              Time to escape
            </div>
            <p>
              Zimná 196,
              <br />
              052 01 Spišská Nová Ves <br />
            </p>
            {/* <p>
              IČO: 50083635
            </p> */}
          </div>
        </Card>
      </section>
    );
}
