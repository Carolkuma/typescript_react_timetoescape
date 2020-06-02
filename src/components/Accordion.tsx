import React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'


interface props {
    question: string,
    answer: string, 
    index: number,
    isOpen: boolean,
    toggle: () => void,
}


const style = (isOpen: boolean) => {return  {
  transition: 'height 0.5s',
  maxHeight: isOpen ? '500px' : 0,
}
}


export const Accordion = ({ question, answer, index, isOpen, toggle }: props) => (
         <div className="w-full leading-normal">
           <div
             className={`text-gray-900 font-bold text-xl border-gray-200 cursor-pointer ${isOpen &&
               "border-b-2"}  px-6 py-3 ${index !== 0 && "border-t-2"}`}
           onClick={toggle}>
             {question}
             <FontAwesomeIcon
               rotation={isOpen ? undefined : 180}
               icon={faChevronUp}
               className="float-right h-full mt-1"
             />
           </div>
    <div className="overflow-hidden" style={style(isOpen)}>

           <p
             className={`text-gray-700 text-base px-6 py-3 `}
              >
             {answer}
           </p>
            </div>
         </div>
       ); 