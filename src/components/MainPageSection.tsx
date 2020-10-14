import React from 'react'
import SectionBackground from './SectionBackground'

interface props {
    id?: string,
    className?: string,
    children?: JSX.Element | JSX.Element[],
    imageSrc: string,
}

export const MainPageSection = ({id, children, imageSrc, className}: props) => <SectionBackground
className={`py-20 text-gray-100 bg-styles bg-dark ${className}`}
imageSrc={imageSrc} tag={'section'} id={id}
>
<div className="container mx-auto px-3">
    {children}
    </div>
    </SectionBackground>