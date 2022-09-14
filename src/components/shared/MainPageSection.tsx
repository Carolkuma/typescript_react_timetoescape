import React from "react";
import SectionBackground from "./SectionBackground";
import loadable from "@loadable/component";
import { Container } from "./Container";
import { DividerWrapper } from "./divider/DividerWrapper";
import styled from "styled-components";
import tw from "twin.macro";
import "twin.macro";

interface props {
  id?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
  imageSrc: string;
  videoEnabled: boolean;
  hasDividerOnTop: boolean;
  hasDividerOnBottom: boolean;
}

const TextWrapper = styled.div`
  background: rgba(33, 33, 33, 0.8);
  background: radial-gradient(
    circle,
    rgba(33, 33, 33, 0.8) 25%,
    rgba(33, 33, 33, 0) 100%
  );
  ${tw`relative z-10 text-gray-100`}
`;

export const MainPageSection = ({
  id,
  children,
  imageSrc,
  className,
  videoEnabled,
  hasDividerOnTop,
  hasDividerOnBottom,
}: props) => {
  const InsideContent = (
    <TextWrapper className={className}>
      <DividerWrapper
        hasDividerOnTop={hasDividerOnTop}
        hasDividerOnBottom={hasDividerOnBottom}
      >
        <Container className="px-3">{children}</Container>
      </DividerWrapper>
    </TextWrapper>
  );

  if (videoEnabled) {
    const BackgroundVideo = loadable(() => import("./BackgroundVideo"));
    return (
      <section tw="text-gray-100 bg-dark relative" id={id}>
        <TextWrapper className={className}>
          <DividerWrapper
            hasDividerOnTop={hasDividerOnTop}
            hasDividerOnBottom={hasDividerOnBottom}
          >
            {<BackgroundVideo />}
            <Container className="px-3">{children}</Container>
          </DividerWrapper>
        </TextWrapper>
      </section>
    );
  } else if (imageSrc !== "") {
    return (
      <SectionBackground
        tw="text-gray-100 bg-dark"
        imageSrc={imageSrc}
        tag={"section"}
        id={id}
      >
        {InsideContent}
      </SectionBackground>
    );
  }

  return (
    <Container as={"section"} tw="px-3" className={className} id={id}>
      {children}
    </Container>
  );
};

MainPageSection.defaultProps = {
  videoEnabled: false,
  imageSrc: "",
  id: null,
  hasDividerOnTop: false,
  hasDividerOnBottom: false,
  className: "py-20",
};
