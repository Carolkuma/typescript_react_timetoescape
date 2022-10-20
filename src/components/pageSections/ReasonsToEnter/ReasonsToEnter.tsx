import { Columns } from "./Columns";
import reasonsToEnter from "../../../../content/home/reasons-to-enter.json";
import "twin.macro";
import { Container } from "../../shared/Container";
import { H2 } from "../../shared/typography/Headline";

const { title, reasons } = reasonsToEnter;
export const ReasonsToEnter = () => (
  <Container as={"section"} id="features" tw="py-10">
    <H2 tw="text-center" altFont>
      {title}
    </H2>
    <Columns reasons={reasons} />
  </Container>
);
