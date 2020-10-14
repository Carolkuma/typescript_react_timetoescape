import React from 'react'
import SectionBackground from './SectionBackground'

interface props {
    id?: string,
    className?: string,
    children?: JSX.Element | JSX.Element[],
    imageSrc: string,
    VideoBg: JSX.Element
}

export const MainPageSection = ({id, children, imageSrc, className, VideoBg}: props) => <SectionBackground
className={`text-gray-100 bg-styles bg-dark`}
imageSrc={imageSrc} 
tag={'section'} id={id}
>
<div className={`py-20 relative z-10 intro-bg text-gray-100 ${className}`}>
<div className="container mx-auto px-3">
    {children}
    </div>
    </div>
    {VideoBg}
    </SectionBackground>