import { useCallback, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image'
import 'twin.macro'
import { Card } from '../../shared/Card'

import loadable from '@loadable/component'
const LightBoxGallery = loadable(() => import('./LightBoxGallery'))

interface Props {
  imagesPath: string
}

const getImagesFromQueryToLightBox = (sources: IGatsbyImageData[]) =>
  sources.map(({ images: { fallback } }) => fallback?.src ?? '')

export const GalleryItems = (props: Props) => {
  const {
    allFiles: { edges: images },
  } = useStaticQuery(
    graphql`
      query GalleryImages {
        allFiles: allFile(filter: { extension: { regex: "/jpg/" }, relativeDirectory: { eq: "gallery" } }) {
          edges {
            node {
              name
              id
              relativePath
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, formats: [WEBP, AVIF])
              }
            }
          }
        }
      }
    `
  )

  const gatsbyImages: IGatsbyImageData[] = images.map(({ node }: { node: ImageDataLike | null }) => getImage(node))

  const lightBoxImages = getImagesFromQueryToLightBox(gatsbyImages)
  const [isLighBoxOpen, setLighBoxOpen] = useState(false)
  const [lightBoxIndex, setLightBoxIndex] = useState(0)
  const openLightBox = useCallback(
    (index: number) => {
      setLightBoxIndex(index)
      setLighBoxOpen(true)
    },
    [isLighBoxOpen, lightBoxIndex]
  )

  return (
    <div tw="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
      {gatsbyImages.map((image, i: number) => (
        <Card key={images[i].id} tw="flex flex-auto w-full flex-col cursor-pointer" onClick={() => openLightBox(i)}>
          <GatsbyImage image={image} alt={images[i].name} />
        </Card>
      ))}
      {isLighBoxOpen && (
        <LightBoxGallery
          mainSrc={lightBoxImages[lightBoxIndex]}
          nextSrc={lightBoxImages[(lightBoxIndex + 1) % lightBoxImages.length]}
          prevSrc={lightBoxImages[(lightBoxIndex + lightBoxImages.length - 1) % lightBoxImages.length]}
          onCloseRequest={() => setLighBoxOpen(false)}
          onMovePrevRequest={() => setLightBoxIndex((lightBoxIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setLightBoxIndex((lightBoxIndex + 1) % lightBoxImages.length)}
        />
      )}
    </div>
  )
}
