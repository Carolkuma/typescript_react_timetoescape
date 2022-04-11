import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "twin.macro";

interface props {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}

const style = (isOpen: boolean) => {
  return {
    transition: "max-height .5s ease-in-out",
    maxHeight: isOpen ? "10rem" : 0,
  };
};

const transitionStyle = {
  transition: "all .6s",
};

export const Accordion = ({
  question,
  answer,
  index,
  isOpen,
  toggle,
}: props) => (
  <div tw="w-full leading-normal">
    <div
      tw="text-2xl border-gray-200 cursor-pointer px-6 py-3"
      className={`alt-font  ${isOpen && "border-b-2"}   ${
        index !== 0 && "border-t-2"
      }`}
      onClick={toggle}
    >
      {question}
      <FontAwesomeIcon
        rotation={isOpen ? undefined : 180}
        icon={faChevronUp}
        tw="h-full text-xl mt-2 text-xl float-right"
        style={transitionStyle}
      />
    </div>
    <div tw="overflow-hidden" style={style(isOpen)}>
      <p tw="text-gray-700 text-base px-6 py-3">{answer}</p>
    </div>
  </div>
);
