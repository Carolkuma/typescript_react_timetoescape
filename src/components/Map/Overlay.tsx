import React from "react";
import Button from "../Button";

interface props {
  link: string,
  label: string,
  children?: JSX.Element | JSX.Element[],
}


const styles = {
  height: '25rem',
  width: '100%',
  background: 'rgba(33, 33, 33, 0.5)',
  transition: 'opacity ease 0.5s',
}


 export const Overlay = ({ children, link, label }: props) => (
   <a href={link} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
     <div className="flex relative">
       <div className="absolute flex z-10 content-center justify-center items-center opacity-0 hover:opacity-100" style={styles}>
                <Button>{label}</Button>
             </div>

             {children}
           </div>
         </a>
       )