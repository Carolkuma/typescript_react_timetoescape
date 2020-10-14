import React, {useState} from 'react'
import Card from '../Card'

import { Accordion } from '../Accordion';
import {title, questions} from '../../../content/home/faq.json'

export const Faq = () => {  
    const [openIndex, setOpenIndex] = useState(0);
    return (
      <section id="faq" className="mt-20">
        <div className="container mx-auto">
          <h2 className="uppercase text-xl tracking-wider text-center alt-font">
            {title}
          </h2>
          <Card className="mt-10 lg:w-2/3 mx-auto">
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
      </section>
    );
}