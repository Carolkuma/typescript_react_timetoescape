import "twin.macro";

const getSymbolAndYear = (startYear: number) => {
  const toYear = new Date().getFullYear();
  const copyrightDate =
    startYear === toYear ? `${startYear}` : `${startYear} - ${toYear}`;
  return `© ${copyrightDate}`;
};

export const Copyright = () => {
  return (
    <span tw="flex-grow md:text-left py-5">
      {getSymbolAndYear(2020)} Time to Escape
    </span>
  );
};
