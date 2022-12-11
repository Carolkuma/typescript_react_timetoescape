import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'
import 'twin.macro'
import tw from 'twin.macro'
import { Card } from '../../shared/Card'
import { H3 } from '../../shared/typography/Headline'

interface Props {
  image: IGatsbyImageData | undefined
  title: string
  description: string
}

const RoomWrapper = styled.div`
  flex-direction: row-reverse;
  ${tw`text-center md:text-left md:flex gap-10`}
`

const RoomImageWrapper = styled(Card)`
  ${tw`w-full lg:w-1/3 self-center`}
`

const RoomTextWrapper = styled.div`
  ${tw`w-full lg:w-2/3 self-center`}
`

export const Room = ({ image, title, description }: Props) => (
  <RoomWrapper>
    {image && (
      <RoomImageWrapper>
        <GatsbyImage image={image} alt={title} tw="w-1/2 mx-auto md:w-auto" />
      </RoomImageWrapper>
    )}
    <RoomTextWrapper>
      <H3 altFont>{title}</H3>
      <p tw="mt-6 mb-10 md:text-lg">{description}</p>
    </RoomTextWrapper>
  </RoomWrapper>
)
