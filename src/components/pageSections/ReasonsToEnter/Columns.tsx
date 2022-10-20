import { Card } from "../../shared/Card";
import Undraw from "react-undraw";
import "twin.macro";

export interface ReasonToEnter {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  reasons: ReasonToEnter[];
}

export const Columns = ({ reasons }: Props) => (
  <div tw="flex flex-col lg:flex-row mt-10 lg:mt-20 gap-10">
    {reasons.map(({ title, description, icon }, index) => (
      <div tw="flex-1" key={index}>
        <Card tw="p-10 h-full flex gap-10 xl:flex-col xl:items-center">
          <div tw="text-6xl text-center w-1/3 xl:w-1/2">
            <Undraw name={icon} height={"130"} />
          </div>
          <div tw="w-2/3 xl:w-full">
            <p tw="text-2xl text-xl" className="alt-font">
              {title}
            </p>
            <p tw="mt-5 mb-3">{description}</p>
          </div>
        </Card>
      </div>
    ))}
  </div>
);
