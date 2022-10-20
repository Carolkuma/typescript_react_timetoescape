import Layout from "../components/layout/Layout";
import { Intro } from "../components/pageSections/Intro";
import { ReasonsToEnter } from "../components/pageSections/ReasonsToEnter/ReasonsToEnter";
import { Rooms } from "../components/pageSections/Rooms/Rooms";
import { Outro } from "../components/pageSections/Outro";
import { Testimonials } from "../components/pageSections/Testimonials/Testimonials";
import { Faq } from "../components/pageSections/Faq/Faq";
import { Contact } from "../components/pageSections/Contact/Contact";
import { AboutEscapeRoom } from "../components/pageSections/AboutEscapeRoom";
import { Gallery } from "../components/pageSections/Gallery/Gallery";
import { Seo } from "../components/layout/Seo";

export default () => (
  <Layout isHome={true} changeBgOpacity={true}>
    <Intro />
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

export const Head = Seo;
