import React from 'react'
import Button from '../Button'


const OutroData = {
  title: `Pripravený na dobrodružstvo?`,
    description: ``,
    buttonText: `Rezervácia`,
    buttonHref: ``,
}
const style = {
  backgroundImage: 'url(./bg/footer.jpg)'
}
export const Outro = () => (
         <section
           className="py-20 md:pt-48 bg-gray-200 text-center bg-styles"
           style={style}
         >
           <div className="container mx-auto">
             <h3 className="text-3xl  md:text-4xl alt-font text-gray-100">
               {OutroData.title}
             </h3>

             {OutroData.description !== "" && (
               <p className="mt-5 text-xl font-light">
                 {OutroData.description}
               </p>
             )}
             <div className="mt-10">
               <Button
                 href="https://time-to-escape-escape-room.reservio.com/booking"
                 target="_blank"
                 size="xl"
               >
                 {OutroData.buttonText}
               </Button>
             </div>
           </div>
         </section>
       );


