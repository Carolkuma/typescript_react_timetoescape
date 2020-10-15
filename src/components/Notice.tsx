import React from "react";

const rules = [
    'Vstup na prevádzku je povolený len s rúškom na tvári (alebo jeho náhradou) zakrývajúcim ústa a nos.',
    'Pri vstupe je povinná dezinfekcia rúk, pripraveným dezinfekčným prostriedkom na recepcii.',
    'Od 13.10.2020 platí obmedzená kapacita max. 5 hráčov v jednej hre.',
]
const getItemClass = (index: number, length: number) =>
  `${"ml-8 pl-2"}  ${index !== length - 1 ? "mb-2" : ""}`;


import {title , description} from '../../content/home/notice.json'
export const Notice = () => <section id="koronavirus" className="my-20 container mx-auto px-3">
        <h2 className="text-3xl lg:text-4xl alt-font text-center px-3">{title}</h2>
        <div className="mt-10 text-center lg:w-2/3 mx-auto text-justify">
               <p className="md:text-lg ">
               Naša úniková hra ostáva aj po zavedení núdzového stavu a prijatí opatrení RÚVZ stále <b>OTVORENÁ!</b> Samozrejme za sprísnených hygienických podmienok. Priestory sú pravidelne dezinfikované a nepretržite vetrané.
               </p>
               <ol type="1" className="ol-rules mt-10 md:text-lg">
               {rules.map((v, i, a) => (
            <li className={getItemClass(i, a.length)} key={i}>
              {v}
            </li>
            ))}</ol>
             </div>
</section>

 








