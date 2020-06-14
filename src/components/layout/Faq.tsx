import React, {useState} from 'react'
import LabelText from '../LabelText'
import Card from '../Card'

import { Accordion } from '../Accordion';


const FrequentlyAskedQuetions = [
    {
        question: `Kto môže hrať ?`,
        answer: `Hra je určená pre 2-4 hráčov bez vekových obmedzení.`,
    },
    {
        question: `Ako sa obliecť ?`,
        answer: `Odporúčame pohodlnú obuv a oblečenie.`,
    },
    {
        question: `Kedy prísť ?`,
        answer: `Odporáčame prísť 10 minút pred rezervovaným termínom.`,
    },
    {
        question: `Koľko trvá hra ?`,
        answer: `Prejdenie miestnosti by malo byť do 60 min.`,
    },
    
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