import { Layout, Seo } from '../components/layout'
import { Intro } from '../components/sections/Intro'
import { ReasonsToEnter } from '../components/sections/ReasonsToEnter/ReasonsToEnter'
import { Rooms } from '../components/sections/Rooms/Rooms'
import { Outro } from '../components/sections/Outro'
import { Testimonials } from '../components/sections/Testimonials/Testimonials'
import { Faq } from '../components/sections/Faq/Faq'
import { Contact } from '../components/sections/Contact/Contact'
import { AboutEscapeRoom } from '../components/sections/AboutEscapeRoom'
import { Gallery } from '../components/sections/Gallery/Gallery'

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
)

export const Head = Seo
