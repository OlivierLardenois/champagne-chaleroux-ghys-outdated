import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;

    * {
        z-index: 1;
    }
`;

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    height: 60px;
    width: 100%;
    background-color: white;
    box-shadow: 0 8px 6px -8px #c1c1c1;
`;

const LogoWapper = styled.div``;

const HeaderItem = styled.div`
    margin: 0 20px;

    &:hover {
        color: blue;
    }

    a {
        color: black;
        cursor: pointer;
        text-decoration: none;
    }
`;

const Header = ({ intl }) => (
    <StyledHeader>
        <LogoWapper />
        <HeaderItems>
            <HeaderItem>
                <Link to="/">{intl.formatMessage({ id: 'home' })}</Link>
            </HeaderItem>
            <HeaderItem>
                <Link to="/gallery">{intl.formatMessage({ id: 'gallery' })}</Link>
            </HeaderItem>
        </HeaderItems>
    </StyledHeader>
);

export default injectIntl(Header);
