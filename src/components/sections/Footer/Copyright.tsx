import 'twin.macro'

const getSymbolAndYear = (startYear: number, toYear = new Date().getFullYear()) =>
  `© ${startYear === toYear ? `${startYear}` : `${startYear} - ${toYear}`}`

export const Copyright = () => {
  return <span tw="flex-grow md:text-left py-5">{getSymbolAndYear(2020)} Time to Escape</span>
}
