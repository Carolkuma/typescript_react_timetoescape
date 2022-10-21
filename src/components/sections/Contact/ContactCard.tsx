import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '../../shared/Card'
import 'twin.macro'
interface props {
  title: string
  icon: IconDefinition
  children: JSX.Element | JSX.Element[] | string
}

export const ContactCard = ({ icon, children, title }: props) => (
  <Card tw="px-10 py-5 grid text-center grid-cols-3  md:grid-cols-2 lg:grid-cols-3 gap-x-5">
    <div tw="text-center self-center text-3xl md:text-4xl col-span-3 sm:col-span-1 lg:col-span-3 xl:col-span-1">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div tw="self-center col-span-3 sm:col-span-1 lg:col-span-3 xl:col-span-2">
      <span tw="uppercase font-bold tracking-wider">{title}</span>
      <br />
      {children}
    </div>
  </Card>
)
