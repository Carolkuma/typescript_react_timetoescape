import styled from 'styled-components'
import { Container } from './Container'
import SectionBackground from './SectionBackground'
import 'twin.macro'

type Props = {
  title?: string
  date?: string
  author?: string
  children?: JSX.Element | JSX.Element[] | string
}

const ArticleBackground = styled.div`
  background: rgb(33, 33, 33);
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 0.9304096638655462) 0%,
    rgba(33, 33, 33, 0) 35%,
    rgba(33, 33, 33, 1) 100%
  );
  min-height: 20vh;
  display: flex;
  align-items: flex-end;
`

export const ArticleHeadline = ({ title, children }: Props) => {
  return (
    <SectionBackground className="text-gray-100 bg-styles bg-dark" imageSrc={'bg/footer.jpg'}>
      <ArticleBackground>
        <Container tw="pt-32 pb-4 px-3">{children}</Container>
      </ArticleBackground>
    </SectionBackground>
  )
}
