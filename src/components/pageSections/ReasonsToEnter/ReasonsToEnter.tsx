import React from "react";
import { Columns } from "./Columns";
import reasonsToEnter from "../../../../content/home/reasons-to-enter.json";
import "twin.macro";
import { Container } from "../../shared/Container";

const { title, reasons } = reasonsToEnter;
export const ReasonsToEnter = () => (
  <Container as={"section"} id="features" tw="py-10">
    <h2 tw="text-3xl lg:text-4xl text-center px-3" className="alt-font">
      {title}
    </h2>
    <Columns reasons={reasons} />
  </Container>
);
