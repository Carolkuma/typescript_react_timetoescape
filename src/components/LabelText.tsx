import React from "react";
import "twin.macro";

const LabelText = ({ children, className = "" }) => (
  <p tw="uppercase tracking-wider" className={className}>
    {children}
  </p>
);

export default LabelText;
