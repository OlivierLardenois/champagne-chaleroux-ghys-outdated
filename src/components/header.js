import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Hamburger from './hamburger';
import Language from './language';

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 8px 6px -8px #c1c1c1;
    background-color: white;
    z-index: 1;
`;

const HeaderItems = styled.div`
    display: flex;

    & > * {
        height: 100%;

        &:hover {
            background-color: #e5e5e5;
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
    color: black;
    text-decoration: none;
`;

const SmallScreenHamburger = styled(Hamburger)`
    @media (min-width: 500px) {
        display: none;
    }
`;

const Header = ({ intl }) => {
    const pages = [
        { label: intl.formatMessage({ id: 'home' }), link: '/' },
        { label: intl.formatMessage({ id: 'products' }), link: '/products' },
        { label: intl.formatMessage({ id: 'gallery' }), link: '/gallery' },
    ];

    return (
        <StyledHeader>
            <LogoWapper>Logo</LogoWapper>
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
