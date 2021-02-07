

import React from 'react'
import Lightbox from './LightBox'
import { MainPageSection } from './MainPageSection'


const imagesPath = ''

export const Gallery = () => {
    return <MainPageSection id={"gallery"}>
      <h2 className="text-3xl lg:text-4xl alt-font text-center">
        Galéria
      </h2>
      <Lightbox imagesPath={'gallery/'}/>
    </MainPageSection>;
}