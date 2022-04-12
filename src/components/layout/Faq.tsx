import React, { useState } from "react";
import { Card } from "../Card";
import useDimensions from "react-use-dimensions";
import "twin.macro";
import { Accordion } from "../Accordion";
import faq from "../../../content/home/faq.json";
const { title, questions } = faq;
export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, { height }] = useDimensions();

  return (
    <section id="faq" tw="mt-20">
      <div tw="container mx-auto">
        <h2
          tw="uppercase text-xl tracking-wider text-center"
          className="alt-font"
        >
          {title}
        </h2>
        <div style={{ height }}>
          <Card tw="mt-10 lg:w-2/3 mx-auto" ref={ref}>
            {questions.map((props, index) => (
              <Accordion
                key={index}
                {...props}
                index={index}
                isOpen={index === openIndex}
                toggle={() => setOpenIndex(index)}
              />
            ))}
          </Card>
        </div>
      </div>
    </section>
  );
};
