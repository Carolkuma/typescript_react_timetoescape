import React from 'react'
import SectionBackground from './SectionBackground'
import loadable from "@loadable/component";

interface props {
    id?: string,
    className?: string,
    children?: JSX.Element | JSX.Element[],
    imageSrc: string,
    videoEnabled: boolean
}

export const MainPageSection = ({
         id,
         children,
         imageSrc,
         className,
         videoEnabled,
       }: props) => {
         const InsideContent = (
           <div
             className={`py-20 relative z-10 intro-bg text-gray-100 ${className}`}
           >
             <div className="container mx-auto px-3">{children}</div>
           </div>
         );

         if (videoEnabled) {
             const BackgroundVideo = loadable(() =>
               import("./BackgroundVideo")
             );
           return (
             <section className={`text-gray-100 bg-styles bg-dark relative`} id={id}>
                 {InsideContent}
                 {<BackgroundVideo />}
             </section>
           );
         } else if (imageSrc !== '') {
           return (
             <SectionBackground
             className={`text-gray-100 bg-styles bg-dark`}
             imageSrc={imageSrc}
             tag={"section"}
             id={id}
             >
                      {InsideContent}
                    </SectionBackground>
                  );
          }

          return (
            <section className={`my-20 container mx-auto px-3`} id={id}>
              {children}
            </section>
          );
       };

MainPageSection.defaultProps = {
    videoEnabled: false,
    imageSrc: '',
    id: null,
}