import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Contact from '../components/contact';
import Image from '../components/image';
import Layout from '../components/layout';
import Presentation from '../components/presentation';
import SEO from '../components/seo';

const IndexPage = ({ intl }) => (
    <Layout>
        <SEO
            title={intl.formatMessage({ id: `home` })}
            keywords={[`champagne`, `vin`, 'wine', `avize`]}
            description={intl.formatMessage({ id: `meta.description` })}
            lang={intl.locale}
        />
        <Image />
        <Presentation name="presentation" />
        <Contact name="contact" />
    </Layout>
);

export default injectIntl(IndexPage);
