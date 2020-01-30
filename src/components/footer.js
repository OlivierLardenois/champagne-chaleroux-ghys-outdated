import { injectIntl, Link } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';
import { blackground } from '../colors';

const EXTERNAL_FRANCE_LINK = [
    { name: 'Domaine Nicolas', link: 'http://www.domaine-nicolas.fr' },
    { name: 'Domaine Bouhelier', link: 'http://www.bouhelier.com' },
    { name: 'Domaine Pons Gralet', link: 'http://www.ponsgralet.com' },
    { name: 'Domaine Mittnacht Frères', link: 'http://www.mittnachtfreres.fr' },
    { name: 'Domaine de Ferrussac', link: 'http://www.ferrussac.fr' },
    { name: 'Bader-Mimeur', link: 'http://www.bader-mimeur.com/fr' },
    { name: 'Fontesole', link: 'https://www.lesvigneronsdefontes.com/fr' },
    { name: 'Cave de Saint Chinian', link: 'https://www.vin-saintchinian.com/fr' },
    {
        name: 'Domaine de Moulines-Figueirasse',
        link: 'http://www.domaines-moulines-figueirasse.fr',
    },
];

const EXTERNAL_EUROPA_LINK = [
    { name: 'Skouras', link: 'http://www.skouras.gr' },
    { name: ' Castel Ruggero', link: 'http://www.castelruggero.com' },
];

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;

    * {
        color: white;
    }

    @media (min-width: 999px) {
        padding: 10px 0 40px 0;
    }
`;

const FooterCard = styled.div`
    background-color: ${blackground};
    box-sizing: border-box;
    box-shadow: 0px 3px 8px 1px #e5e5e5;
    display: flex;
    justify-content: space-around;
    padding: 30px 70px;
    width: 100%;

    h3 {
        font-size: 1.1em;
        margin-top: 0;
    }

    h4 {
        font-size: 0.9em;
        margin: 1em 0 0.5em 0;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        display: block;
        margin: 5px 0;

        a {
            cursor: pointer;
            font-size: 0.8em;
            text-decoration: none;
            &:hover {
                color: grey;
            }
        }
    }

    @media (min-width: 999px) {
        max-width: 800px;
        border-radius: 15px;
    }

    @media (max-width: 499px) {
        text-align: center;
        flex-direction: column;
        align-items: center;

        li > a {
            display: block;
            padding: 10px;
        }
    }
`;

const StyledExternalLinks = styled.div`
    @media (min-width: 499px) {
        & > div {
            display: inline-block;
            vertical-align: top;
        }
        div:not(:last-child) {
            margin-right: 30px;
        }
    }
`;

const StyledStiteMap = styled.div`
    @media (max-width: 499px) {
        display: none;
    }
`;

const Footer = ({ intl }) => (
    <StyledFooter>
        <FooterCard>
            <StyledStiteMap>
                <h3>{intl.formatMessage({ id: 'sitemap' })}</h3>
                <ul>
                    <li>
                        <Link to="/">
                            {intl.formatMessage({ id: 'presentation.title' })}
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            {intl.formatMessage({ id: 'products.title' })}
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery">{intl.formatMessage({ id: 'gallery' })}</Link>
                    </li>
                </ul>
            </StyledStiteMap>
            <StyledExternalLinks>
                <h3>{intl.formatMessage({ id: 'estates' })}</h3>
                <div>
                    <h4>{intl.formatMessage({ id: 'france' })}</h4>
                    <ul>
                        {EXTERNAL_FRANCE_LINK.map(link => (
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={link.link}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4>{intl.formatMessage({ id: 'europa' })}</h4>
                    <ul>
                        {EXTERNAL_EUROPA_LINK.map(link => (
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={link.link}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </StyledExternalLinks>
        </FooterCard>
    </StyledFooter>
);

export default injectIntl(Footer);
