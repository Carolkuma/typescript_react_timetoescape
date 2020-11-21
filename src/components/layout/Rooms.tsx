import React from "react";

import * as data  from '../../../content/home/rooms.json'
import { BookingButton } from "../BookingButton";
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby";
import { findImages } from "../SectionBackground";
import { MainPageSection } from "../MainPageSection";
declare module 'react' {
     interface HTMLProps<T> {
        async?:boolean;
    }    
}



export const Rooms = () => {
    const {images} = useStaticQuery(graphql`
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
    `)

    
    return (
      <MainPageSection id="rooms">
        <h2 className="text-3xl lg:text-4xl alt-font text-center">
          {data.title}
        </h2>
        <div className="">
          {data.rooms.map(({ title, description, href, image }, index) => {
            const optImage = findImages(images, image.src)[0];
            return (
              <div
                className={`text-center md:text-left md:flex ${
                  index % 2 == 0 ? "md:flex-row-reverse" : ""
                }`}
                key={index}
              >
                <div className="w-full md:1/2 lg:w-1/3 self-center p-5">
                  <Img
                    fluid={optImage.node.childImageSharp.fluid}
                    alt={image.alt}
                    className="w-1/2 mx-auto md:w-auto"
                  />
                </div>
                <div className="w-full md:1/2 lg:w-2/3 self-center p-5">
                  <h3 className="text-3xl alt-font">{title}</h3>
                  <p className="mt-6 mb-10 md:text-lg">{description}</p>
                  <BookingButton />
                </div>
              </div>
            );
          })}
        </div>
      </MainPageSection>
    );}