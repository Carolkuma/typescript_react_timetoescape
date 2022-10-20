import rooms from "../../../../content/home/rooms.json";
import { graphql, useStaticQuery } from "gatsby";
import { MainPageSection } from "../../shared/MainPageSection";
import "twin.macro";
import { Room } from "./Room";
import { getImage } from "gatsby-plugin-image";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export const findImage = (images, relativePath) =>
  images.find(
    ({ node }: { node: FileNode }) => node?.relativePath === relativePath
  );

export const Rooms = () => {
  const {
    allFiles: { edges: images },
  } = useStaticQuery(graphql`
    query MyQuery {
      allFiles: allFile(
        filter: {
          extension: { regex: "/jpg/" }
          relativeDirectory: { eq: "rooms" }
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

  return (
    <MainPageSection id="rooms" tw="py-10 text-center">
      {rooms.rooms.map(({ image: { src }, ...props }, index) => {
        const optImage = findImage(images, src);
        const image = getImage(optImage.node);
        return <Room key={index} {...props} image={image} />;
      })}
    </MainPageSection>
  );
};
