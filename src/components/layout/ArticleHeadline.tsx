import React, { Children } from 'react'
import SectionBackground from '../SectionBackground'

type Props = {
    title?: string,
    date?: string,
    author?: string,
    children?: JSX.Element | JSX.Element[] | string,
}

export const ArticleHeadline = ({ title, children }: Props) => {
        return (
          <SectionBackground
            className={`text-gray-100 bg-styles bg-dark`}
            imageSrc={"bg/footer.jpg"}
            tag={"div"}
          >
            <div className="article-bg">
              <div className="container mx-auto pt-32 pb-4 px-3">
                {children}
              </div>
            </div>
          </SectionBackground>
        );
       }



