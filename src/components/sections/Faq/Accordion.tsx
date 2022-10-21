import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import 'twin.macro'
import styled from 'styled-components'
import tw from 'twin.macro'
import { altFontMixin } from '../../shared/typography/Headline'
interface Props {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onClick: () => void
}

const Details = styled.details`
  & summary::-webkit-details-marker,
  & summary::marker {
    display: none;
    content: '';
  }
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  &[open] {
    min-height: 108px;
  }
  min-height: 58px;
  &[open] {
    max-height: 108px;
  }
  max-height: 58px;
`

const AnswerContainer = styled.p`
  ${tw`text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-900 text-base border-b-2 py-3 px-6`}
`

const ArrowIcon = styled(FontAwesomeIcon)`
  transition: 0.6s ease-in-out;
  ${tw`h-full text-xl mt-2 text-xl float-right`}
  transform: rotateX(180deg);
  details[open] & {
    transform: rotateX(0);
  }
`
const QuestionContainer = styled.summary`
  ${altFontMixin}
  ${tw`text-2xl border-gray-200 dark:border-gray-900 cursor-pointer border-b-2 py-3 px-6`}
`

export const Accordion = ({ question, answer, onClick, isOpen }: Props) => (
  <Details
    open={isOpen}
    onClick={(e) => {
      e.preventDefault()
      onClick()
    }}
  >
    <QuestionContainer>
      {question} <ArrowIcon icon={faChevronUp} />
    </QuestionContainer>
    <AnswerContainer>{answer}</AnswerContainer>
  </Details>
)
