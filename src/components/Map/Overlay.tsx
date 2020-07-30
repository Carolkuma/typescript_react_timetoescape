import React from "react";
import Button, { ButtonElement } from "../Button";
import { isMobile } from 'react-device-detect';

interface props {
  link: string,
  label: string,
  children?: JSX.Element | JSX.Element[],
}


const styles = {
  height: '100%',
  width: '100%',
  transition: 'opacity ease 0.5s',
  zIndex: 2
}


 export const Overlay = ({ children, link, label }: props) => (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <div className="flex relative">
              {isMobile === false ? (
                <>
                  <div
                    className="md:absolute  md:bg-opacity-75 md:bg-dark flex z-500 content-center justify-center items-center opacity-100 md:opacity-0 hover:opacity-100"
                    style={styles}
                  >
                    <Button element={ButtonElement.DIV}>{label}</Button>
                  </div>
                  {children}
                </>
              ) : (
                <Button element={ButtonElement.DIV} className="mx-auto">
                  {label}
                </Button>
              )}
            </div>
          </a>
        );
       