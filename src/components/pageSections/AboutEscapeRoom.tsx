import React from "react";
import about from "../../../content/home/about.json";
import { MainPageSection } from "../shared/MainPageSection";
import "twin.macro";
import { Container } from "../shared/Container";
const { title, id, description, backgroundImage } = about;

export const AboutEscapeRoom = () => (
  <MainPageSection
    id={id}
    imageSrc={backgroundImage}
    hasDividerOnTop
    hasDividerOnBottom
    tw="py-24"
  >
    <Container tw="px-3">
      <h2 tw="text-3xl lg:text-4xl text-center" className="alt-font">
        {title}
      </h2>
      <div tw="mt-10 text-center lg:w-2/3 mx-auto text-justify">
        <p tw="md:text-lg ">{description}</p>
      </div>
    </Container>
  </MainPageSection>
);
