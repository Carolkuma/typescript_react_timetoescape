import React from "react";
import SectionBackground from "./SectionBackground";
import loadable from "@loadable/component";
import { Container } from "./Container";
import { DividerWrapper } from "./divider/DividerWrapper";

interface props {
  id?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
  imageSrc: string;
  videoEnabled: boolean;
  hasDividerOnTop: boolean;
  hasDividerOnBottom: boolean;
}

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
    <div tw="relative z-10 intro-bg text-gray-100" className={className}>
      <DividerWrapper
        hasDividerOnTop={hasDividerOnTop}
        hasDividerOnBottom={hasDividerOnBottom}
      >
        <Container className="px-3">{children}</Container>
      </DividerWrapper>
    </div>
  );

  if (videoEnabled) {
    const BackgroundVideo = loadable(() => import("./BackgroundVideo"));
    return (
      <section tw="text-gray-100 bg-styles bg-dark relative" id={id}>
        <div tw="relative z-10 intro-bg text-gray-100" className={className}>
          <DividerWrapper
            hasDividerOnTop={hasDividerOnTop}
            hasDividerOnBottom={hasDividerOnBottom}
          >
            {<BackgroundVideo />}
            <Container className="px-3">{children}</Container>
          </DividerWrapper>
        </div>
      </section>
    );
  } else if (imageSrc !== "") {
    return (
      <SectionBackground
        tw="text-gray-100 bg-styles bg-dark"
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
