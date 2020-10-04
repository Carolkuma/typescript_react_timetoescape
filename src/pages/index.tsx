import React from 'react';


import Layout from '../components/layout/Layout';

import customerData from '../data/customer-data';
import { Helmet } from "react-helmet";

import { Intro } from '../components/layout/Intro';
import { FocusGroup } from '../components/layout/focusgroup/FocusGroup';
import { Rooms } from '../components/layout/Rooms';
import { Outro } from '../components/layout/Outro';
import { Testimonials } from '../components/Testimonials';
import { Faq } from '../components/layout/Faq';
import { Contact } from '../components/layout/Contact/Contact';
import { Location } from '@reach/router';
import { AboutEscapeRoom } from '../components/layout/AboutEscapeRoom';


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
    <FocusGroup />
    <AboutEscapeRoom/>
    <Rooms />
    {/* TODO: gallery */}

    {/* <Testimonials customerData={customerData} /> */}
    <Faq />
    <Contact />
    <Outro />
  </Layout>
);
