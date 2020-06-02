import React, {useState} from 'react'
import LabelText from '../LabelText'
import Card from '../Card'

import { Accordion } from '../Accordion';


const FrequentlyAskedQuetions = [
    {
        question: `Kto môže hrať ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    },
    {
        question: `Ako sa obliecť ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    },
    {
        question: `Kto môže hrať ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    }
]



export const Faq = () => {

   
    const [openIndex, setOpenIndex] = useState(0);
    return (
      <section id="faq" className="mt-20">
        <div className="container mx-auto">
          <LabelText className="text-center">
            Často kladené otázky
          </LabelText>
          <Card className="mt-10">
            {FrequentlyAskedQuetions.map((props, index) => (
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