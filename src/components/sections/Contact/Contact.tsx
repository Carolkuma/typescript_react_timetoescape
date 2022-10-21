import { Card } from '../../shared/Card'
import { Map } from '../Map/Map'
import { ContactCard } from './ContactCard'
import { Social } from './Social'
import contact from '../../../../content/home/contact.json'
import { getIcon } from '../../getIcon'
import 'twin.macro'
import { Container } from '../../shared/Container'
import styled from 'styled-components'
import tw from 'twin.macro'
import { H2 } from '../../shared/typography/Headline'
const { title, address, map, info } = contact

const createMarkup = (content: string) => {
  return { __html: content }
}

const Address = styled.address`
  whitespace: pre-line;
  margin-bottom: 0.75rem;
`

const ContactWrapper = styled(Card)`
  ${tw`px-5 md:px-0 md:flex md:flex-row md:flex-row-reverse md:-mb-32 overflow-hidden relative z-10`}
  background-color: var(--color-bg);
`

export const Contact = () => {
  return (
    <Container as={'section'} id="contact" tw="pt-10 pb-20 md:pb-0 text-center">
      <H2 altFont>{title}</H2>
      <div tw="grid grid-cols-1 lg:grid-cols-3 gap-10 py-10">
        {info.map((info, key) => {
          return (
            <ContactCard key={key} icon={getIcon(info.icon)} title={info.title}>
              <div dangerouslySetInnerHTML={createMarkup(info.content)}></div>
            </ContactCard>
          )
        })}
      </div>
      <ContactWrapper>
        <div tw="w-full flex flex-col  text-center md:text-left md:w-1/3 p-10">
          <div tw="flex-grow">
            <div tw="uppercase tracking-wider font-bold mb-5">{address.title}</div>
            <Address>
              <p>{address.mail}</p>
            </Address>
          </div>
          <Social />
        </div>
        <div tw="flex-auto lg:flex-1">
          <Map coordinates={map.coordinates} label={map.label} link={map.googleMapsLink} />
        </div>
      </ContactWrapper>
    </Container>
  )
}
