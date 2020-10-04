
import React from 'react';
import Layout from '../components/layout/Layout';
import { CommingSoon } from '../components/CommingSoon';

export default () => (
  <Layout isRegistrationEnabled={false} showNav={false}>
    <CommingSoon />
  </Layout>
);
