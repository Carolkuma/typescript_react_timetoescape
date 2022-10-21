import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  isCentered?: boolean
}

export const Container = styled.div<Props>`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: ${({ isCentered = true }) => (isCentered ? 'auto' : '0')};
  margin-right: ${({ isCentered = true }) => (isCentered ? 'auto' : '0')};
  ${tw`container`};
`
