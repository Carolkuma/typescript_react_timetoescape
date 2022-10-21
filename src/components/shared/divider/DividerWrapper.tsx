import React, { PropsWithChildren } from 'react'
import SectionDivider from './SectionDivider'

interface DividerWrapperProps extends PropsWithChildren {
  hasDividerOnTop: boolean
  hasDividerOnBottom: boolean
}

export const DividerWrapper = ({ hasDividerOnTop, hasDividerOnBottom, children }: DividerWrapperProps) => (
  <>
    {hasDividerOnTop && <SectionDivider isTop />}
    {children}
    {hasDividerOnBottom && <SectionDivider />}
  </>
)
