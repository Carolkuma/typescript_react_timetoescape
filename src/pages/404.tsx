import React from 'react'
import { Layout, Seo } from '../components/layout'
import { NotFound } from '../components/NotFound'

export default () => (
  <Layout isHome={false}>
    <NotFound />
  </Layout>
)

export const Head = Seo
