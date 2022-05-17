import React from "react";
import SectionDivider from "../ReactSvgs/SectionDivider";

interface DividerWrapperProps {
  hasDividerOnTop: boolean;
  hasDividerOnBottom: boolean;
  children?: JSX.Element | JSX.Element[];
}

export const DividerWrapper = ({
  hasDividerOnTop,
  hasDividerOnBottom,
  children,
}: DividerWrapperProps) => (
  <>
    {hasDividerOnTop && <SectionDivider isTop />}
    {children}
    {hasDividerOnBottom && <SectionDivider />}
  </>
);
