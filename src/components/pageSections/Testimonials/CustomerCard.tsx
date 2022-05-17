import React from "react";
import Img from "gatsby-image";
import { Card } from "../../shared/Card";
import StarRatings from "react-star-ratings";
import { lightFormat } from "date-fns";
import { graphql, useStaticQuery } from "gatsby";
import { findImages } from "../../shared/SectionBackground";
import "twin.macro";
export interface Customer {
  rating: number;
  scale: number;
  source: number;
  date: string;
  customerImage: string;
  customerName: string;
  content: string;
}
interface props {
  customer: Customer;
}

const formatDate = (date: string): string =>
  lightFormat(new Date(date), "dd.MM.yyyy");

const showTextRating = (rating: number, scale: number): string =>
  `${rating}/${scale}`;

export const CustomerCard = ({ customer }: props) => {
  const { images } = useStaticQuery(graphql`
    query CUstomerImagesQuery {
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

  const optImage = findImages(images, customer.customerImage)[0];

  return (
    <Card tw="flex flex-1 flex-col mb-8 p-5 md:p-10 md:mx-5">
      <div tw="flex mb-8">
        <StarRatings
          rating={customer.rating}
          starDimension="1.5rem"
          starSpacing=".5rem"
          starRatedColor="#f6ad55"
          starEmptyColor="rgba(26, 32, 44,.3)"
          numberOfStars={customer.scale}
          name="hodnotenie"
        />
        <div tw="float-right flex-1 text-right">
          {showTextRating(customer.rating, customer.scale)}
        </div>
      </div>
      <div tw="flex-grow">
        <q>{customer.content}</q>
        <br />
        <small>Zdroj:{customer.source}</small>
      </div>
      <div tw="flex items-center mt-8">
        <Img
          fluid={optImage.node.childImageSharp.fluid}
          alt={customer.customerName}
          tw="w-12 h-12 mr-4 rounded-full"
        />
        <div>
          <p>{customer.customerName}</p>
          <p tw="text-sm">{formatDate(customer.date)}</p>
        </div>
      </div>
    </Card>
  );
};
