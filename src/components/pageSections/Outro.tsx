import React from "react";
import { BookingButton } from "../shared/BookingButton";
import { MainPageSection } from "../shared/MainPageSection";
import outro from "../../../content/home/outro.json";
import "twin.macro";
const { title, description, backgroundImage } = outro;
export const Outro = () => (
  <MainPageSection
    imageSrc={backgroundImage}
    tw="md:pt-48 text-center py-20"
    hasDividerOnTop
  >
    <>
      <h3 tw="text-3xl md:text-4xl" className="alt-font">
        {title}
      </h3>
      {description !== "" && <p tw="mt-5 text-xl font-light">{description}</p>}
    </>
    <BookingButton size="xl" tw="mt-10" />
  </MainPageSection>
);
