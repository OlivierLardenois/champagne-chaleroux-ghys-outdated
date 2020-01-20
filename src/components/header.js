import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import { injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';
import { blackground, blackHover } from '../colors';
import Hamburger from './hamburger';
import { Language } from './language';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 6px 0px #c1c1c1;
    background-color: ${blackground};
    z-index: 1;

    * {
        color: white;
    }
`;

const HeaderItems = styled.div`
    display: flex;

    & > * {
        height: 100%;

        &:hover {
            background-color: ${blackHover};
        }
    }

    @media (max-width: 499px) {
        display: none;
    }
`;

const LogoWapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 50px;
`;

const HeaderItem = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: white;
    text-decoration: none;
`;

const SmallScreenHamburger = styled(Hamburger)`
    @media (min-width: 500px) {
        display: none;
    }
`;

const Logo = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                style={{ width: '40px' }}
                fluid={data.file.childImageSharp.fluid}
                alt="logo"
            />
        )}
    />
);

const Header = ({ intl }) => {
    const pages = [
        { label: intl.formatMessage({ id: 'home' }), link: '/' },
        { label: intl.formatMessage({ id: 'products.title' }), link: '/products' },
        { label: intl.formatMessage({ id: 'gallery' }), link: '/gallery' },
    ];

    return (
        <StyledHeader>
            <LogoWapper>
                <Logo />
            </LogoWapper>
            <SmallScreenHamburger pages={pages} />
            <HeaderItems>
                {pages.map(({ label, link }) => (
                    <HeaderItem to={link}>{label}</HeaderItem>
                ))}
                <Language />
            </HeaderItems>
        </StyledHeader>
    );
};

export default injectIntl(Header);
