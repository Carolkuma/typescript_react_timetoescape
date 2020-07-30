
import React from 'react';
import Layout from '../components/layout/Layout';
import { NotFound } from '../components/NotFound';


export default () => <Layout isRegistrationEnabled={false} showNav={false}>
            <NotFound/>
</Layout>


