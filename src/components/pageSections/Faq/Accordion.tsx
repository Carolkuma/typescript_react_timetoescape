import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "twin.macro";
import styled from "styled-components";
import tw from "twin.macro";
interface Props {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}

const AnswerContainer = styled.p<{ isOpen: boolean }>`
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "10rem" : 0)};

  ${tw`text-gray-700 dark:text-gray-200 text-base`}
`;

const ArrowIcon = styled(FontAwesomeIcon)`
  transition: 0.6s ease-in-out;
  ${tw`h-full text-xl mt-2 text-xl float-right`}
`;
// TODO: fix borders
const QuestionContainer = styled.div<{ isOpen: boolean; index: number }>`
  ${tw`text-2xl border-gray-200 dark:border-gray-900 cursor-pointer`}
  ${({ isOpen }) => isOpen && tw`border-b-2`}
  ${({ index }) => index !== 0 && tw`border-t-2`}
`;

export const Accordion = ({
  question,
  answer,
  index,
  isOpen,
  toggle,
}: Props) => (
  <div tw="w-full leading-normal py-3 px-6">
    <QuestionContainer
      className="alt-font"
      index={index}
      isOpen={isOpen}
      onClick={toggle}
    >
      {question}
      <ArrowIcon rotation={isOpen ? undefined : 180} icon={faChevronUp} />
    </QuestionContainer>
    <AnswerContainer isOpen={isOpen}>{answer}</AnswerContainer>
  </div>
);
