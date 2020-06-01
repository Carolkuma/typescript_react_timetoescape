import React from "react";


interface props {
  
  children?: JSX.Element | JSX.Element[],
}

export const Overlay = ({ children }: props) => <div>{children}</div>;



//  export const Overlay = ({ children, link, label }) => (
//   <a href={link} target="_blank" rel="noopener noreferrer">
//            <div className={styles['overlay']}>
//              <div className={styles['container']}>
//                <button>{label}</button>
//              </div>

//              <div className={styles['children']}>{children}</div>
//            </div>
//          </a>
//        )