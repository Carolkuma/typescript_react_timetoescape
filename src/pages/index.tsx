import React from 'react';


import Layout from '../components/layout/Layout';


import { Helmet } from "react-helmet";

import { Intro } from '../components/layout/Intro';
import { ReasonsToEnter } from '../components/layout/ReasonsToEnter/ReasonsToEnter';
import { Rooms } from '../components/layout/Rooms';
import { Outro } from '../components/layout/Outro';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/layout/Faq';
import { Contact } from '../components/layout/Contact/Contact';
import { AboutEscapeRoom } from '../components/layout/AboutEscapeRoom';
import { Notice } from '../components/Notice';


export default () => (
  <Layout isHome={true}>
    <Helmet
      htmlAttributes={{
        lang: "sk-SK",
      }}
      title="Escape room - Spišská Nová Ves | Mission Imposible | timetoescape.sk"
      defer={false}
    >
      <meta
        name="description"
        content="Napínavá a zábavná úniková hra Escape Room priamo v Spiškej
      Novej Vsi."
      />
      
    </Helmet>

    <Intro />
    <Notice/>
    <ReasonsToEnter />
    <AboutEscapeRoom/>
    <Rooms />
    {/* TODO: gallery */}

    <Testimonials/>
    <Faq />
    <Contact />
    <Outro />
  </Layout>
);
