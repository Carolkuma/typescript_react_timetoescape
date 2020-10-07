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
  transition: 'max-height .6s',
  maxHeight: isOpen ? '10rem' : 0,
}
}

const transitionStyle = {
    transition: "all .6s", 
  };


export const Accordion = ({
         question,
         answer,
         index,
         isOpen,
         toggle,
       }: props) => (
         <div className="w-full leading-normal">
           <div
             className={`alt-font text-2xl border-gray-200 cursor-pointer ${isOpen &&
               "border-b-2"}  px-6 py-3 ${index !== 0 && "border-t-2"}`}
             onClick={toggle}
           >
             
             {question}
             <FontAwesomeIcon
               rotation={isOpen ? undefined : 180}
               icon={faChevronUp}
               className="h-full text-xl mt-2 text-xl float-right"
               style={transitionStyle}
             />
           </div>
           <div className="overflow-hidden" style={style(isOpen)}>
             <p className={`text-gray-700 text-base px-6 py-3 `}>{answer}</p>
           </div>
         </div>
       ); 