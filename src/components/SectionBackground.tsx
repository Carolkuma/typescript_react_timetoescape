import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import BackgroundImage from 'gatsby-background-image'

interface props  {
  className?: string, 
  children?: JSX.Element | JSX.Element[],
}

const SectionBackground = ({ className, children }: props) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "footer.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "footer.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ]

  return (
    <BackgroundImage
      Tag={`section`}
      id={`media-test`}
      className={className}
      fluid={sources}
    >
        {children}
    </BackgroundImage>
  )
}

// const StyledInnerWrapper = styled.div`
//   margin-top: 10%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `

// const StyledArtDirectedBackground = styled(ArtDirectedBackground)`
//   width: 100%;
//   min-height: 100vh;
//   /* You should set a background-size as the default value is "cover"! */
//   background-size: auto;
//   /* So we won't have the default "lightgray" background-color. */
//   background-color: transparent;
// `

export default SectionBackground