import { PropsWithChildren, useState } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = typeof document !== `undefined` ? document.getElementById('portal') : null
export const Portal = ({ children }: PropsWithChildren) => {
  const [el] = useState(typeof document !== `undefined` ? document.createElement('div') : null)
  if (portalRoot) {
    return ReactDOM.createPortal(children, portalRoot)
  } else {
    return null
  }
}
