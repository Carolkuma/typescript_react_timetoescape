import React from "react";
import rooms from "../../../../content/home/rooms.json";
import { BookingButton } from "../../shared/BookingButton";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { findImages } from "../../shared/SectionBackground";
import { MainPageSection } from "../../shared/MainPageSection";
import "twin.macro";
import { Room } from "./Room";
declare module "react" {
  interface HTMLProps<T> {
    async?: boolean;
  }
}

export const Rooms = () => {
  const { images } = useStaticQuery(graphql`
    query MyQuery {
      images: allFile(filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }) {
        edges {
          node {
            extension
            relativePath
            childImageSharp {
              # Specify the image processing specifications right in the query.
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return (
    <MainPageSection id="rooms" tw="py-10">
      <h2 tw="text-3xl lg:text-4xl  text-center" className="alt-font">
        {rooms.title}
      </h2>
      <div>
        {rooms.rooms.map(({ image, ...props }, index) => {
          const optImage = findImages(images, image.src)[0];
          return (
            <Room isEven={index % 2 === 0} {...props} optImage={optImage} />
          );
        })}
      </div>
    </MainPageSection>
  );
};
