import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const Container = styled.main`
    margin-top: 60px;
`;

const Layout = ({ children }) => (
    <>
        <Header />
        <Container>{children}</Container>
        <Footer />
    </>
);

export default Layout;
