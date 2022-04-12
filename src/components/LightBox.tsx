import React, { Component, Fragment } from "react";
import Img from "gatsby-image";
import { findImages } from "./SectionBackground";
import { graphql, useStaticQuery } from "gatsby";
import { Card } from "./Card";

interface Props {
  imagesPath: string;
}

const getKeyCode = (e: KeyboardEvent) =>
  e.key ? e.key : e.keyCode ? e.keyCode : undefined;

const Lightbox = (props: Props) => {
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
  const { imagesPath } = props;
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  // TODO: make it as HOC
  const mobileGalleryImages = findImages(mobileImages, imagesPath);
  const desctopGalleryImages = findImages(desktopImages, imagesPath);

  const sources = mobileGalleryImages.map((mobileImage, i) => {
    return [
      mobileImage.node.childImageSharp.fluid,
      {
        ...desctopGalleryImages[i].node.childImageSharp.fluid,
        media: `(min-width: 491px)`,
      },
    ];
  });

  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {sources.map((img, i) => (
        <Card key={i} className="flex flex-auto w-full flex-col">
          <Img fluid={img} />
        </Card>
      ))}
    </div>
  );

  // {/* do the showing animation break to new component*/}
  // {/* <div visible={showLightbox}>
  //   <div>
  //     <Img fluid={images[selectedImage].node.sizes} />
  //     <div>
  //       <button onClick={this.closeModal}>Close</button>
  //       <div>
  //         <button onClick={this.goBack} disabled={selectedImage === 0}>
  //           Previous
  //         </button>
  //         <button
  //           onClick={this.goForward}
  //           disabled={selectedImage === images.length - 1}
  //         >
  //           Next
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div> */}
};

export default Lightbox;
