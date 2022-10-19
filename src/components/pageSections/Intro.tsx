import Button, { ButtonElement } from "../shared/Button";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { MainPageSection } from "../shared/MainPageSection";
import intro from "../../../content/home/intro.json";
import nav from "../../../content/home/common/navigation.json";
import "twin.macro";
import { H1 } from "../shared/typography/Headline";

const { title, description, buttonlabel, backgroundImage } = intro;
const { header } = nav;
const firstAnchor = header[0].href;

export const Intro = () => {
  return (
    <MainPageSection
      id="intro"
      imageSrc={backgroundImage}
      videoEnabled={true}
      tw="py-40 text-center"
      hasDividerOnBottom
    >
      <H1 altFont>{title}</H1>
      <p tw="text-xl lg:text-2xl mt-6 font-light mb-8 md:mb-12">
        {description}
      </p>
      <AnchorLink href={firstAnchor}>
        <Button size="lg" element={ButtonElement.DIV}>
          {buttonlabel}
        </Button>
      </AnchorLink>
    </MainPageSection>
  );
};
