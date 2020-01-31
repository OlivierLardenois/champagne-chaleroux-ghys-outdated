import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import Product from '../components/product';
import SEO from '../components/seo';

const Products = styled.section`
    padding: 40px 0;

    & > div:not(:first-child) {
        margin-top: 20px;
    }
    @media (max-width: 999px) {
        & > div:not(:first-child) {
            margin-top: 60px;
        }
    }
`;

const ProductsPage = ({ intl }) => (
    <Layout>
        <SEO
            title={intl.formatMessage({ id: `products.title` })}
            keywords={[`champagne`, `vin`, `avize`]}
            description={intl.formatMessage({ id: `meta.description` })}
            lang={intl.locale}
        />
        <Products>
            <Product imgName="brut.jpg" reverse>
                {intl.formatMessage({ id: 'products.brut.title' })}
                {intl.formatMessage({ id: 'products.brut.text' })}
            </Product>
            <Product imgName="millesime.jpg">
                {intl.formatMessage({ id: 'products.millesime.title' })}
                {intl.formatMessage({ id: 'products.millesime.text' })}
            </Product>
            <Product imgName="rose.jpg" reverse>
                {intl.formatMessage({ id: 'products.rose.title' })}
                {intl.formatMessage({ id: 'products.rose.text' })}
            </Product>
        </Products>
    </Layout>
);

export default injectIntl(ProductsPage);
