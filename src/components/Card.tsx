import React from 'react';
interface props {
  className?: string,
  children?: JSX.Element | JSX.Element[],
}

const Card = ({ className, children }: props) => (
  <div
    className={`rounded-lg border border-solid border-gray-200 card-shadow ${className}`}
  >
    {children}
  </div>
);

export default Card;
