import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Product from '../components/product';

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

const ProductsPage = () => (
    <Layout>
        <Products>
            <Product imgName="image6.jpg" reverse>
                Sea oporteat hendrerit scripserit ea. His id diam dolor ridens. Ullum
                veniam ei ius. Iuvaret gubergren consequuntur at nec. Eu qui dicam meliore
                conclusionemque, has vidisse feugiat offendit id, duo prima pericula cu.
            </Product>
            <Product imgName="image5.jpg">
                Sea oporteat hendrerit scripserit ea. His id diam dolor ridens. Ullum
                veniam ei ius. Iuvaret gubergren consequuntur at nec. Eu qui dicam meliore
                conclusionemque, has vidisse feugiat offendit id, duo prima pericula cu.
            </Product>
            <Product imgName="image4.jpg" reverse>
                Sea oporteat hendrerit scripserit ea. His id diam dolor ridens. Ullum
                veniam ei ius. Iuvaret gubergren consequuntur at nec. Eu qui dicam meliore
                conclusionemque, has vidisse feugiat offendit id, duo prima pericula cu.
            </Product>
        </Products>
    </Layout>
);

export default ProductsPage;
