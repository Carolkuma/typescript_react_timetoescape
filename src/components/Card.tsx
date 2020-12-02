import React, { forwardRef, RefObject } from 'react';
interface Props {
  className?: string,
  children?: JSX.Element | JSX.Element[],
}
type Ref = HTMLDivElement
const Card = forwardRef<Ref, Props>(({ className, children }, ref) => (
  <div
    ref={ref}
    className={`md:rounded-lg md:border border-solid border-gray-200 card-shadow overflow-hidden ${className}`}
  >
    {children}
  </div>
));

export default Card;
