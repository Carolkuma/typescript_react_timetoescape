import React from "react";

import Layout from "../components/layout/Layout";

import { Helmet } from "react-helmet";

import { Intro } from "../components/pageSections/Intro";
import { ReasonsToEnter } from "../components/pageSections/ReasonsToEnter/ReasonsToEnter";
import { Rooms } from "../components/pageSections/Rooms/Rooms";
import { Outro } from "../components/pageSections/Outro";
import { Testimonials } from "../components/pageSections/Testimonials/Testimonials";
import { Faq } from "../components/pageSections/Faq/Faq";
import { Contact } from "../components/pageSections/Contact/Contact";
import { AboutEscapeRoom } from "../components/pageSections/AboutEscapeRoom";
// import { Notice } from "../components/Notice";
import { Gallery } from "../components/pageSections/Gallery/Gallery";

export default () => (
  <Layout isHome={true} changeBgOpacity={true}>
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
    {/* <Notice /> */}
    <ReasonsToEnter />
    <AboutEscapeRoom />
    <Rooms />
    <Gallery />
    <Testimonials />
    <Faq />
    <Contact />
    <Outro />
  </Layout>
);
