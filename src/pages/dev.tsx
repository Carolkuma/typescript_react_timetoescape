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



// const pageModSettings = {
//   isRegistrationEnabled: false,
//   isComingSoonEnabled: false,
//   isMaintenance: false
// }



export default () => (
  <Layout>
    <Helmet
      htmlAttributes={{
        lang: 'sk-SK',
      }}
      title="timetoescape.sk"
      defer={false}
    />
    <Intro />
    <FocusGroup />
    <Rooms />
    {/* TODO: gallery */}

    <Testimonials customerData={customerData} />
    <Faq />
    <Contact />
    <Outro />
  </Layout>
);
