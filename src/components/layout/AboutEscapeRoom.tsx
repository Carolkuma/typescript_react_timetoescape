import React from "react";


const style = {
  backgroundImage: "url(./bg/about.jpg)",
};

export const AboutEscapeRoom = () => (
         <section
           id="about"
           className="py-20 text-gray-100 bg-styles"
           style={style}
         >
           <div className="container mx-auto px-3">
             <h2 className="text-3xl lg:text-4xl alt-font text-center">
               Čo je to escape room ?
             </h2>
             <div className="mt-10 text-center lg:w-2/3 mx-auto text-justify">
               <p className="md:text-lg ">
                 Escape rooms prenášajú zážitky z filmov, kníh a videohier do
                 reality. Trend sa začal v Japonsku a veľmi rýchlo sa rozšíril
                 do celého sveta. 
                 {/* </p>
             <p className="mb-10 md:text-lg"> */}
                 Účastníci zvyčajne hrajú ako spolupracujúci tím. Hry sa
                 odohrávajú na rôznych fiktívnych miestach. Ciele a výzvy sa
                 zvyčajne riadia témou miestnosti. 
                 {/* </p>
             <p className="mb-10 md:text-lg"> */}
                 Hra začína krátkym úvodom do pravidiel hry a spôsobu výhry.
                 Počas hry hráči skúmajú, nachádzajú stopy a lúštia hádanky,
                 ktoré im umožňujú postupovať ďalej v hre. Výzvy v únikovej
                 miestnosti sa zameriavajú skôr logické myslenie a dedukciu. Ak
                 sa tímu nedarí, môže požiadať o radu. Ak hráči dosiahnu cieľ v
                 časovom limite, vyhrávajú hru.
                 {/* Tímy s rýchlymi časmi sa niekedy umiestnia na výsledkovej tabuli. */}
               </p>
             </div>
           </div>
         </section>
       );

