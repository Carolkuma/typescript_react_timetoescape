import { GalleryItems } from "./GalleryItems";
import { MainPageSection } from "../../shared/MainPageSection";
import "twin.macro";
import { H2 } from "../../shared/typography/Headline";
const imagesPath = "gallery/";

export const Gallery = () => (
  <MainPageSection id={"gallery"}>
    <H2 tw="text-center" altFont>
      Galéria
    </H2>
    <GalleryItems imagesPath={imagesPath} />
  </MainPageSection>
);
