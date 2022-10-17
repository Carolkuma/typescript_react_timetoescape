import { graphql, useStaticQuery } from "gatsby";
import React from "react";

import BackgroundImage from "gatsby-background-image";

interface Props {
  className?: string | undefined;
  children?: JSX.Element | JSX.Element[];
  imageSrc: string;
  tag: JSX.IntrinsicElements["div"];
  id: string;
}

interface Node {
  relativePath: string;
}

interface ImageQueryResult {
  node: Node;
}

interface QueryResult {
  edges: ImageQueryResult[];
}

export const findImages = ({ edges }: QueryResult, relativePath: string) => {
  const images = edges.filter(({ node }: ImageQueryResult) =>
    node.relativePath.includes(relativePath)
  );

  if (images.length <= 0) {
    throw new Error(`Cannot find image ${relativePath}`);
  }
  return images;
};

const SectionBackground = ({
  className,
  children,
  imageSrc,
  tag,
  id,
}: Props) => {
  const { mobileImages, desktopImages } = useStaticQuery(
    graphql`
      query {
        mobileImages: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
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
        desktopImages: allFile(
          filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
        ) {
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
  );
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const mobileImage = findImages(mobileImages, imageSrc)[0];
  const desctopImage = findImages(desktopImages, imageSrc)[0];

  const sources = [
    mobileImage.node.childImageSharp.fluid,
    {
      ...desctopImage.node.childImageSharp.fluid,
      media: `(min-width: 491px)`,
    },
  ];

  return (
    <BackgroundImage Tag={tag} id={id} className={className} fluid={sources}>
      {children}
    </BackgroundImage>
  );
};

SectionBackground.defaultProps = {
  tag: "div",
  id: "",
  className: undefined,
};

export default SectionBackground;
