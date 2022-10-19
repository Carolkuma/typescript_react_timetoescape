import about from "../../../content/home/about.json";
import { MainPageSection } from "../shared/MainPageSection";
import "twin.macro";
import { H2 } from "../shared/typography/Headline";

const { title, id, description, backgroundImage } = about;

export const AboutEscapeRoom = () => (
  <MainPageSection
    id={id}
    imageSrc={backgroundImage}
    hasDividerOnTop
    hasDividerOnBottom
    tw="py-24 px-3 text-center"
  >
    <H2 altFont>{title}</H2>
    <p tw="mt-10 text-center lg:w-2/3 mx-auto text-justify md:text-lg ">
      {description}
    </p>
  </MainPageSection>
);
