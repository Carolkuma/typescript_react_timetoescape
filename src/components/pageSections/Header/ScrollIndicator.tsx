import { memo } from "react";
import styled from "styled-components";

const ScrollIndicator = styled.div<{ scrollTopPercentage: number }>`
  height: 3px;
  transition: width 0.2 ease-in-out;
  background-color: #f6ad55;
  ${({ scrollTopPercentage }) => `width: ${scrollTopPercentage}%`}
`;

export default memo(ScrollIndicator);
