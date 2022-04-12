import React from "react";
import { Card } from "../../Card";
import Undraw from "react-undraw";
import "twin.macro";

export interface ReasonToEnter {
  title: string;
  description: string;
  icon: string;
}

interface props {
  reasons: ReasonToEnter[];
}

export const Columns = ({ reasons }: props) => (
  <div tw="flex flex-col lg:flex-row lg:-mx-3 lg:mt-20 text-center">
    {reasons.map(({ title, description, icon }, index) => (
      <div tw="flex-1 px-5" key={index}>
        <Card tw="p-5 h-full mt-10 lg:mt-0">
          <div tw="text-6xl text-center mb-5">
            <Undraw name={icon} height={"130"} />
          </div>
          <p tw="text-2xl text-xl" className="alt-font">
            {title}
          </p>
          <p tw="mt-5 mb-3">{description}</p>
        </Card>
      </div>
    ))}
  </div>
);
