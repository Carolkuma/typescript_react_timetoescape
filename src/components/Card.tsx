import React, { forwardRef } from "react";
import "twin.macro";
interface Props {
  className?: string;
  children?: JSX.Element | JSX.Element[];
}
type Ref = HTMLDivElement;

//TODO: refactor to styled adn default export
const Card = forwardRef<Ref, Props>(({ className, children }, ref) => (
  <div
    ref={ref}
    tw="md:rounded-lg md:border border-solid border-gray-200 overflow-hidden"
    className={`card-shadow  ${className}`}
  >
    {children}
  </div>
));

export default Card;
