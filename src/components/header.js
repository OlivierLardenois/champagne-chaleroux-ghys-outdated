import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

import Language from './language';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;

    & > * {
        z-index: 1;
    }
`;

const HeaderItems = styled.div`
    display: flex;
    justify-content: flex-end;
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: white;
    box-shadow: 0 8px 6px -8px #c1c1c1;

    & > * {
        height: 100%;
        &:hover {
            background-color: #e5e5e5;
        }
    }
`;

const LogoWapper = styled.div``;

const HeaderItem = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 20px;
    color: black;
    text-decoration: none;
`;

const Header = ({ intl }) => (
    <StyledHeader>
        <LogoWapper />
        <HeaderItems>
            <HeaderItem to="/">{intl.formatMessage({ id: 'home' })}</HeaderItem>
            <HeaderItem to="/products">
                {intl.formatMessage({ id: 'products' })}
            </HeaderItem>
            <HeaderItem to="/gallery">{intl.formatMessage({ id: 'gallery' })}</HeaderItem>
            <Language />
        </HeaderItems>
    </StyledHeader>
);

export default injectIntl(Header);
