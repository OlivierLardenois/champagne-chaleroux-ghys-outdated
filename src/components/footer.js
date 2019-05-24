import React from 'react';
import styled from 'styled-components';
import { injectIntl, Link } from 'gatsby-plugin-intl';

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;

    @media (min-width: 999px) {
        padding: 10px 0 40px 0;
    }
`;

const FooterCard = styled.div`
    background: white;
    box-sizing: border-box;
    box-shadow: 0px 3px 8px 1px #e5e5e5;
    display: flex;
    justify-content: space-between;
    padding: 30px 70px;
    width: 100%;

    @media (min-width: 999px) {
        max-width: 800px;
    }
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
            color: black;
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

const Footer = ({ intl }) => (
    <StyledFooter>
        <FooterCard>
            <FooterLink>
                <h3>{intl.formatMessage({ id: 'sitemap' })}</h3>
                <ul>
                    <li>
                        <Link to="/">{intl.formatMessage({ id: 'presentation' })}</Link>
                    </li>
                    <li>
                        <Link to="/gallery">
                            {intl.formatMessage({ id: 'products' })}
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery">{intl.formatMessage({ id: 'gallery' })}</Link>
                    </li>
                </ul>
            </FooterLink>
            <FooterActionsWrapper>Add social media</FooterActionsWrapper>
        </FooterCard>
    </StyledFooter>
);

export default injectIntl(Footer);
