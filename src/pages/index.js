import React from 'react';
import { Link } from 'gatsby';

import Contact from '../components/contact';
import Layout from '../components/layout';
import Image from '../components/image';
import Presentation from '../components/presentation';
import SEO from '../components/seo';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Image />
        <Link to="/page-2/">Go to page 2</Link>
        <Presentation />
        <Contact />
    </Layout>
);

export default IndexPage;
