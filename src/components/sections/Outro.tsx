import 'twin.macro'
import outro from '../../../content/home/outro.json'
import { MainPageSection } from '../shared/MainPageSection'
import { H2 } from '../shared/typography/Headline'
const { title, description, backgroundImage } = outro

export const Outro = () => (
  <MainPageSection imageSrc={backgroundImage} tw="md:pt-48 text-center py-20" hasDividerOnTop>
    <H2 altFont as={'h3'}>
      {title}
    </H2>
    <>{description && description !== '' && <p tw="mt-5 text-xl font-light">{description}</p>}</>
  </MainPageSection>
)
