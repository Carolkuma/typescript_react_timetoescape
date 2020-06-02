import React from 'react';


const getColSpan = (reverseOrder: boolean) => `` // `col-span-1 lg:col-span-${reverseOrder ? 1 : 2}`

interface props  {
  primarySlot: JSX.Element | JSX.Element[] | string,
  secondarySlot: JSX.Element | JSX.Element[] | string,
  reverseOrder: boolean,
}

const SplitSection = ({ primarySlot, secondarySlot, reverseOrder }: props) => (
  <>
    <div className={`${getColSpan(reverseOrder)} row-span-1 px-10 self-center flex-1 `}>
      {reverseOrder ? secondarySlot : primarySlot}
    </div>
    <div className={`${getColSpan(!reverseOrder)} row-span-3 px-10 self-center flex-1 ${!reverseOrder && ''}`}>
      {!reverseOrder ? secondarySlot : primarySlot}
    </div>
  </>
);

export default SplitSection;
