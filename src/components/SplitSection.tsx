import React from 'react';


const getColSpan = (reverseOrder: boolean) => `col-span-${reverseOrder ? 1 : 2}`

interface props  {
  primarySlot: JSX.Element | JSX.Element[] | string,
  secondarySlot: JSX.Element | JSX.Element[] | string,
  reverseOrder: boolean,
}

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }: props) => (
  <>
    <div className={`${getColSpan(reverseOrder)} px-10 mt-20 self-center flex-1 `}>
      {reverseOrder ? secondarySlot : primarySlot}
    </div>
    <div className={`${getColSpan(!reverseOrder)} px-10 mt-20 self-center flex-1`}>
      {!reverseOrder ? secondarySlot : primarySlot}
    </div>
  </>
);

export default SplitSection;
