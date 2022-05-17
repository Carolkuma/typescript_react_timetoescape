import React, { memo } from "react";
import styled from "styled-components";

const ScrollIndicatorWrapper = styled.div`
  height: 3px;
  transition: width 0.2 ease-in-out;
  background-color: #f6ad55;
`;

interface Props {
  scrollTopPercentage: number;
}

const ScrollIndicator = ({ scrollTopPercentage }: Props) => (
  <ScrollIndicatorWrapper
    style={{
      width: `${scrollTopPercentage}%`,
    }}
  />
);

export default memo(ScrollIndicator);
