import React from 'react'
import { BookingButton } from '../BookingButton';
import { title, description, backgroundImage  } from '../../../content/home/outro.json' 
import { MainPageSection } from '../MainPageSection';

export const Outro = () => (
        <MainPageSection imageSrc={backgroundImage} className="md:pt-48 text-center">
            <>
             <h3 className="text-3xl  md:text-4xl alt-font ">
               {title}
             </h3>
             {description !== "" && (
               <p className="mt-5 text-xl font-light">
                 {description}
               </p>
             )}
             </>
              <div className="mt-10">
              <BookingButton size="xl"/>
             </div>
          </MainPageSection>
       )