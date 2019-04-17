import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { Link } from 'react-scroll';

import Language from './language';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    padding: 10px 0 40px 0;
`;

const FooterCard = styled.div`
    background: white;
    box-sizing: border-box;
    box-shadow: 0px 3px 8px 1px #e5e5e5;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    padding: 30px 70px;
    width: 100%;
`;

const FooterLink = styled.div`
    ul {
        padding: 0;
    }

    h3 {
        font-size: 1.1em;
        margin-bottom: 20px;
    }

    li {
        display: block;
        margin: 5px 0;

        a {
            cursor: pointer;
            font-size: 0.8em;
            text-decoration: none;
            &:hover {
                color: blue;
            }
        }
    }
`;

const FooterActionsWrapper = styled.div`
    padding: 10px 0;
    width: 250px;
`;

const Scroller = ({ children, to }) => (
    <Link to={to} smooth="easeOutQuart" duration={1000}>
        {children}
    </Link>
);

const Footer = ({ intl }) => (
    <StyledFooter>
        <FooterCard>
            <FooterLink>
                <h3>{intl.formatMessage({ id: 'sitemap' })}</h3>
                <ul>
                    <li>
                        <Scroller to="presentation">
                            {intl.formatMessage({ id: 'presentation' })}
                        </Scroller>
                    </li>
                    <li>
                        <Scroller to="access">
                            {intl.formatMessage({ id: 'access' })}
                        </Scroller>
                    </li>
                    <li>
                        <Scroller to="contact">
                            {intl.formatMessage({ id: 'contact' })}
                        </Scroller>
                    </li>
                </ul>
            </FooterLink>
            <FooterActionsWrapper>
                <Language />
                Add social media
            </FooterActionsWrapper>
        </FooterCard>
    </StyledFooter>
);

export default injectIntl(Footer);
