import { lightFormat } from "date-fns";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import StarRatings from "react-star-ratings";
import "twin.macro";
import { Card } from "../../shared/Card";
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
  const {
    allFiles: { edges: images },
  } = useStaticQuery(graphql`
    query CustomerImages {
      allFiles: allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "reviews" }
        }
      ) {
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
  `);

  const gatsbyImage = images.find(
    ({ node }: { node: FileNode }) =>
      node?.relativePath === customer.customerImage
  );

  const image = getImage(gatsbyImage.node);
  return (
    <Card tw="flex flex-1 flex-col p-5 md:p-10 ">
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
        {image && (
          <GatsbyImage
            image={image}
            alt={customer.customerName}
            tw="w-12 h-12 mr-4 rounded-full"
          />
        )}
        <div>
          <p>{customer.customerName}</p>
          <p tw="text-sm">{formatDate(customer.date)}</p>
        </div>
      </div>
    </Card>
  );
};
