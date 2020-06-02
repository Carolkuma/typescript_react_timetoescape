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
            <span>Po - So 9:00 - 22:00</span>
          </ContactCard>
          <ContactCard icon={faPhone} title="Telefónne číslo">
            <span>+421 951 406 635</span>
          </ContactCard>
          <ContactCard icon={faEnvelope} title="Emailová adresa">
            <span>kontakt@timetoescape.sk</span>
          </ContactCard>
        </div>

        <Card className="grid grid-cols-1 lg:grid-cols-3 mt-10 overflow-hidden">
          <div className="lg:col-span-2">
            <GMap coordinates={{ lat: 48.9429886, lng: 20.5683209 }}></GMap>
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
            {/* Informácie aj na facebooku Fotky aj na instagrame Objednávky
              Rezervovať termín si môžete využitím tlačidla "Objednať sa". */}
            <div className="uppercase tracking-wider  my-5">
              Prevádzkovateľ
            </div>
            <p>
              Zapísaný: Okresný úrad Spišská Nová Ves, <br />
              číslo živ.reg.:
              <br />
              052 01 Spišská Nová Ves <br />
              IČO:
              <br />
              DIČ:
              <br />
            </p>
          </div>
        </Card>
      </section>
    );
}
