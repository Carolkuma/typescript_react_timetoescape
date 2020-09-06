import React, {useState} from 'react'
import Card from '../Card'

import { Accordion } from '../Accordion';


const FrequentlyAskedQuetions = [
  {
    question: `Kto môže hrať ?`,
    answer: `Hra je určená pre hráčov bez vekového limitu. Deti do veku 12 rokov s doprovodom dospelej osoby.`,
  },
  {
    question: `Koľko ľudí môže hrať ?`,
    answer: `Hra je určená pre 2-4 hráčov.`,
  },
  {
    question: `Ako sa obliecť ?`,
    answer: `Odporúčame pohodlnú obuv a oblečenie.`,
  },
  {
    question: `Kedy prísť ?`,
    answer: `Odporúčame prísť 10 minút pred rezervovaným termínom.`,
  },
  {
    question: `Koľko trvá hra ?`,
    answer: `Časový limit na únik z miestnosti je 70 min.`,
  },
  {
    question: `Cena ?`,
    answer: `Cena 15€/osoba.`,
  },
];

export const Faq = () => {  
    const [openIndex, setOpenIndex] = useState(0);
    return (
      <section id="faq" className="mt-20">
        <div className="container mx-auto">
          <h2 className="uppercase tracking-wider text-center">
            Často kladené otázky
          </h2>
          <Card className="mt-10 lg:w-2/3 mx-auto">
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