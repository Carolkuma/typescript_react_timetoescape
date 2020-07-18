import React from 'react';

interface props {
    isOpen: boolean
    onClick: () => void
    className?: string
}
export const NavigationButton = ({ isOpen, className, onClick }: props) => (
         <button
           onClick={onClick}
           className={`${isOpen ? "open" : ""} ${className}`}
           aria-label="Menu"
         >
           {[...Array(3)].map((_, i) => (
             <span key={i} className="icon-bar"></span>
           ))}
         </button>
       );

NavigationButton.defaulProps = {
    isOpen:false
}