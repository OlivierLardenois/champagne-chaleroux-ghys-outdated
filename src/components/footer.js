import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
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

    h3 {
        font-size: 1.1em;
    }

    h4 {
        font-size: 0.9em;
        margin: 1em 0 0.5em 0;
    }

    @media (min-width: 999px) {
        max-width: 800px;
    }

    @media (max-width: 499px) {
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: 20px;
        }
    }
`;

const FooterLink = styled.div`
    ul {
        padding: 0;
        margin: 0;
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

    @media (max-width: 499px) {
        text-align: center;
    }
`;

const FooterActionsWrapper = styled.div`
    @media (max-width: 499px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const Footer = ({ intl }) => (
    <StyledFooter>
        <FooterCard>
            <FooterLink>
                <h3>{intl.formatMessage({ id: 'sitemap' })}</h3>
                <ul>
                    <li>
                        <Link to="/">
                            {intl.formatMessage({ id: 'presentation.title' })}
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            {intl.formatMessage({ id: 'products' })}
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery">{intl.formatMessage({ id: 'gallery' })}</Link>
                    </li>
                </ul>
            </FooterLink>
            <FooterLink>
                <h3>{intl.formatMessage({ id: 'estates' })}</h3>
                <h4>{intl.formatMessage({ id: 'france' })}</h4>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.domaine-nicolas.fr"
                        >
                            Domaine Nicolas
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.bouhelier.com"
                        >
                            Domaine Bouhelier
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.ponsgralet.com"
                        >
                            Domaine Pons Gralet
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.mittnachtfreres.fr"
                        >
                            Domaine Mittnacht Frères
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.domaines-moulines-figueirasse.fr"
                        >
                            Domaine de Moulines-Figueirasse
                        </a>
                    </li>
                </ul>
                <h4>{intl.formatMessage({ id: 'europa' })}</h4>
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.skouras.gr"
                        >
                            Skouras
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://www.castelruggero.com"
                        >
                            Castel Ruggero
                        </a>
                    </li>
                </ul>
            </FooterLink>
            <FooterActionsWrapper>
                <h3>{intl.formatMessage({ id: 'followUs' })}</h3>
                <div>
                    <a href="https://www.facebook.com/lardenoisetfils/">
                        <Image />
                    </a>
                </div>
            </FooterActionsWrapper>
        </FooterCard>
    </StyledFooter>
);

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "fb.png" }) {
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
                style={{ width: '50px', height: '50px' }}
                fluid={data.file.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
            />
        )}
    />
);

export default injectIntl(Footer);
