import React from "react";
import about from "../../../content/home/about.json";
import { MainPageSection } from "../MainPageSection";
import "twin.macro";
const { title, id, description, backgroundImage } = about;

export const AboutEscapeRoom = () => (
  <MainPageSection
    id={id}
    imageSrc={backgroundImage}
    hasDividerOnTop
    hasDividerOnBottom
    className={"py-24"}
  >
    <div tw="container mx-auto px-3">
      <h2 tw="text-3xl lg:text-4xl text-center" className="alt-font">
        {title}
      </h2>
      <div tw="mt-10 text-center lg:w-2/3 mx-auto text-justify">
        <p tw="md:text-lg ">{description}</p>
      </div>
    </div>
  </MainPageSection>
);
