import React from 'react';
import styled from 'styled-components';
import Footer from './footer';
import Header from './header';

const Container = styled.main`
    margin-top: 60px;
`;

const Layout = ({ children }) => (
    <>
        <link
            href="https://fonts.googleapis.com/css?family=Open+Sans|Roboto"
            rel="stylesheet"
        />
        <Header />
        <Container>{children}</Container>
        <Footer />
    </>
);

export default Layout;
