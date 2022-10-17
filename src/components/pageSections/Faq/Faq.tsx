import React, { useState } from "react";
import { Card } from "../../shared/Card";
import "twin.macro";
import { Accordion } from "./Accordion";
import faq from "../../../../content/home/faq.json";
import { Container } from "../../shared/Container";
const { title, questions } = faq;
export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Container id="faq" tw="mt-20" as={"section"}>
      <h2
        tw="uppercase text-xl tracking-wider text-center"
        className="alt-font"
      >
        {title}
      </h2>
      <Card tw="mt-10 lg:w-2/3 mx-auto">
        {questions.map((props, index) => (
          <Accordion
            key={index}
            {...props}
            index={index}
            isOpen={index === openIndex}
            onClick={() => setOpenIndex(index)}
          />
        ))}
      </Card>
    </Container>
  );
};
