import React, { Fragment } from "react";
import SectionBackground from "./SectionBackground";
import loadable from "@loadable/component";
import SectionDivider from "./ReactSvgs/SectionDivider";

interface props {
  id?: string;
  className?: string;
  children?: JSX.Element | JSX.Element[];
  imageSrc: string;
  videoEnabled: boolean;
  hasDividerOnTop: boolean;
  hasDividerOnBottom: boolean;
}

interface DividerWrapperProps {
  hasDividerOnTop: boolean;
  hasDividerOnBottom: boolean;
  children?: JSX.Element | JSX.Element[];
}

const DividerWrapper = ({
  hasDividerOnTop,
  hasDividerOnBottom,
  children,
}: DividerWrapperProps) => {
  return (
    <Fragment>
      {hasDividerOnTop && <SectionDivider isTop />}
      {children}
      {hasDividerOnBottom && <SectionDivider />}
    </Fragment>
  );
};

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
    <div className={`relative z-10 intro-bg text-gray-100 ${className}`}>
      <DividerWrapper
        hasDividerOnTop={hasDividerOnTop}
        hasDividerOnBottom={hasDividerOnBottom}
      >
        <div className="container mx-auto px-3">{children}</div>
      </DividerWrapper>
    </div>
  );

  if (videoEnabled) {
    const BackgroundVideo = loadable(() => import("./BackgroundVideo"));
    return (
      <section className={`text-gray-100 bg-styles bg-dark relative`} id={id}>
        {InsideContent}
        {<BackgroundVideo />}
      </section>
    );
  } else if (imageSrc !== "") {
    return (
      <SectionBackground
        className={`text-gray-100 bg-styles bg-dark `}
        imageSrc={imageSrc}
        tag={"section"}
        id={id}
      >
        {InsideContent}
      </SectionBackground>
    );
  }

  return (
    <section className={`container mx-auto px-3 ${className} `} id={id}>
      {children}
    </section>
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
