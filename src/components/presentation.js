import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import styled from 'styled-components';
import { greyWhite } from '../colors';
import locale from '../intl/fr.json';

const StyledPresentation = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    background-color: ${greyWhite};

    p {
        max-width: 70%;
        text-align: center;
    }
`;

const StyledTitle = styled.h1`
    font-family: cursive, sans-serif;
    font-size: 3em;
    margin: 20px 0;
    font-style: italic;
    text-decoration: underline;
`;

const Presentation = ({ intl }) => (
    <StyledPresentation>
        <StyledTitle>{intl.formatMessage({ id: 'presentation.title' })}</StyledTitle>
        {locale.presentation.text.map((x, index) => (
            <p>{intl.formatMessage({ id: `presentation.text.${index}` })}</p>
        ))}
    </StyledPresentation>
);

export default injectIntl(Presentation);
