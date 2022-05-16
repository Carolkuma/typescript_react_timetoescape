import React from "react";
import { Container } from "../shared/Container";
import SectionBackground from "../shared/SectionBackground";

type Props = {
  title?: string;
  date?: string;
  author?: string;
  children?: JSX.Element | JSX.Element[] | string;
};

export const ArticleHeadline = ({ title, children }: Props) => {
  return (
    <SectionBackground
      className="text-gray-100 bg-styles bg-dark"
      imageSrc={"bg/footer.jpg"}
      tag={"div"}
    >
      <div tw="article-bg">
        <Container tw="pt-32 pb-4 px-3">{children}</Container>
      </div>
    </SectionBackground>
  );
};
