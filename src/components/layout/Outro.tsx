import React from 'react'
import { BookingButton } from '../BookingButton';
import { title, description  } from '../../../content/home/outro.json' 
import SectionBackground from '../SectionBackground';

const style = {
  backgroundImage: 'url(./bg/footer.jpg)'
}

export const Outro = () => (
        <SectionBackground
           className="py-20 md:pt-48 bg-gray-200 text-center bg-styles bg-dark"
         >
           <div className="container mx-auto px-5">
             <h3 className="text-3xl  md:text-4xl alt-font text-gray-100">
               {title}
             </h3>
             {description !== "" && (
               <p className="mt-5 text-xl font-light">
                 {description}
               </p>
             )}
             <div className="mt-10">
               <BookingButton size="xl"/>
             </div>
           </div>
          </SectionBackground>
       )
