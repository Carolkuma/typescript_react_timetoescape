import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  className?: string | undefined
  imageSrc: string
  id?: string
}

interface Node {
  childImageSharp: any
  relativePath: string
}

interface ImageQueryResult {
  node: Node
}

interface QueryResult {
  edges: ImageQueryResult[]
}

export const findImages = ({ edges }: QueryResult, relativePath: string) => {
  const images = edges.filter(({ node }: ImageQueryResult) => node.relativePath.includes(relativePath))

  if (images.length <= 0) {
    throw new Error(`Cannot find image ${relativePath}`)
  }
  return images
}

const SectionBackground = ({ className, children, imageSrc, id = '' }: Props) => {
  const { mobileImages, desktopImages } = useStaticQuery(
    graphql`
      query {
        mobileImages: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(maxWidth: 490, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
        desktopImages: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
          edges {
            node {
              extension
              relativePath
              childImageSharp {
                fluid(quality: 100, maxWidth: 4160) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const mobileImage = findImages(mobileImages, imageSrc)[0]
  const desctopImage = findImages(desktopImages, imageSrc)[0]

  const sources = [
    mobileImage.node.childImageSharp.fluid,
    {
      ...desctopImage.node.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage id={id} className={className} fluid={sources}>
      {children}
    </BackgroundImage>
  )
}

export default SectionBackground
