import tw from 'twin.macro'
import styled from 'styled-components'

export const Card = styled.div`
  ${tw`md:rounded-lg md:border border-solid border-gray-200 overflow-hidden md:shadow-xl
`}

  @media only screen and (min-width: 769px) and (prefers-color-scheme: dark) {
    & {
      border-color: rgb(38 38 38);
      box-shadow: 0 10px 28px rgba(255, 255, 255, 0.08);
    }
  }
`
