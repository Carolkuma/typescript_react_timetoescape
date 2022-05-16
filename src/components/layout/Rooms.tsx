import React from "react";
import rooms from "../../../content/home/rooms.json";
import { BookingButton } from "../BookingButton";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { findImages } from "../shared/SectionBackground";
import { MainPageSection } from "../shared/MainPageSection";
import "twin.macro";
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
        {rooms.rooms.map(({ title, description, href, image }, index) => {
          const optImage = findImages(images, image.src)[0];
          return (
            <div
              className={`text-center md:text-left md:flex ${
                index % 2 == 0 ? "md:flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div tw="w-full lg:w-1/3 self-center p-5">
                <Img
                  fluid={optImage.node.childImageSharp.fluid}
                  alt={image.alt}
                  tw="w-1/2 mx-auto md:w-auto"
                />
              </div>
              <div tw="w-full lg:w-2/3 self-center p-5">
                <h3 tw="text-3xl" className="alt-font">
                  {title}
                </h3>
                <p tw="mt-6 mb-10 md:text-lg">{description}</p>
                <BookingButton />
              </div>
            </div>
          );
        })}
      </div>
    </MainPageSection>
  );
};
