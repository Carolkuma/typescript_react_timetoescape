import React, { memo } from "react";
import styled from "styled-components";

const ScrollIndicatorWrapper = styled.div`
  height: 3px;
  transition: width 0.2 ease-in-out;
`;

interface Props {
  scrollTopPercentage: number;
}

const ScrollIndicator = ({ scrollTopPercentage }: Props) => {
  return (
    <ScrollIndicatorWrapper
      style={{
        width: `${scrollTopPercentage}%`,
      }}
      className="bg-orange-400"
    />
  );
};

export default memo(ScrollIndicator);
