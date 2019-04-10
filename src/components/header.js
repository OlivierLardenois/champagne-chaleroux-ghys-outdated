import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';

const HeaderItem = styled.div`
    margin: 0 20px;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    height: 60px;
    width: 100%;
    border: solid;
    box-sizing: border-box;
`;

const LogoWapper = styled.div``;

const Header = ({ intl }) => (
    <StyledHeader>
        <LogoWapper />
        <HeaderItems>
            <HeaderItem>
                <a>{intl.formatMessage({ id: 'presentation' })}</a>
            </HeaderItem>
            <HeaderItem>
                <a>{intl.formatMessage({ id: 'access' })}</a>
            </HeaderItem>
            <HeaderItem>
                <a>{intl.formatMessage({ id: 'contact' })}</a>
            </HeaderItem>
        </HeaderItems>
    </StyledHeader>
);

export default injectIntl(Header);
