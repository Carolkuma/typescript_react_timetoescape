import React from 'react'
import Button from '../Button'


const OutroData = {
  title: `Pripravený na dobrodružstvo?`,
    description: ``,
    buttonText: `Vstúpiť ihneď`,
    buttonHref: ``,
}




export const Outro = () => (
         <section className="py-20 bg-gray-200 rounded-lg text-center">
           <div className="container mx-auto">
             
                <h3 className="text-3xl  md:text-4xl font-semibold">{OutroData.title}</h3>
            
             {
                OutroData.description !== '' && <p className="mt-5 text-xl font-light">{OutroData.description}</p>
             }
                <div className="mt-10">

                <Button  href="https://time-to-escape-escape-room.reservio.com/booking"  size="xl">
                 {OutroData.buttonText}
               </Button>
                </div>
           </div>
         </section>
       );


