import React, { useCallback, useEffect, useState } from "react";
import Img from "gatsby-image";
import { findImages } from "../../shared/SectionBackground";
import { graphql, useStaticQuery } from "gatsby";
import { Card } from "../../shared/Card";
import "twin.macro";

import loadable from "@loadable/component";
const LightBoxGallery = loadable(() => import("./LightBoxGallery"));

interface Props {
  imagesPath: string;
}

const getImagesFromQueryToLightBox = (sources): string[] => {
  return sources.map(([_, desktopImage]) => {
    const { srcWebp } = desktopImage;
    return srcWebp;
  });
};

const getKeyCode = (e: KeyboardEvent) =>
  e.key ? e.key : e.keyCode ? e.keyCode : undefined;

const GalleryItems = (props: Props) => {
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
  const images = getImagesFromQueryToLightBox(sources);
  debugger;
  const [isLighBoxOpen, setLighBoxOpen] = useState(false);
  const [lightBoxIndex, setLightBoxIndex] = useState(0);
  const openLightBox = useCallback(
    (index: number) => {
      setLightBoxIndex(index);
      setLighBoxOpen(true);
    },
    [isLighBoxOpen, lightBoxIndex]
  );

  return (
    <>
      <div tw="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {sources.map((img, i) => (
          <Card
            key={i}
            tw="flex flex-auto w-full flex-col cursor-pointer"
            onClick={() => openLightBox(i)}
          >
            <Img fluid={img} />
          </Card>
        ))}
      </div>
      {isLighBoxOpen && (
        <LightBoxGallery
          mainSrc={images[lightBoxIndex]}
          nextSrc={images[(lightBoxIndex + 1) % images.length]}
          prevSrc={images[(lightBoxIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setLighBoxOpen(false)}
          onMovePrevRequest={() =>
            setLightBoxIndex(
              (lightBoxIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setLightBoxIndex((lightBoxIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default GalleryLightbox;
