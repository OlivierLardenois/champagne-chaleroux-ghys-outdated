import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { Link } from 'react-scroll';

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

const Scroller = ({ children, to }) => (
    <Link to={to} smooth="easeOutQuart" duration={1000}>
        {children}
    </Link>
);

const Header = ({ intl }) => (
    <StyledHeader>
        <LogoWapper />
        <HeaderItems>
            <HeaderItem>
                <Scroller to="presentation">
                    {intl.formatMessage({ id: 'presentation' })}
                </Scroller>
            </HeaderItem>
            <HeaderItem>
                <Scroller to="access">{intl.formatMessage({ id: 'access' })}</Scroller>
            </HeaderItem>
            <HeaderItem>
                <Scroller to="contact">{intl.formatMessage({ id: 'contact' })}</Scroller>
            </HeaderItem>
        </HeaderItems>
    </StyledHeader>
);

export default injectIntl(Header);
