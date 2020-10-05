import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { MdPhone } from 'react-icons/md';
import styled from 'styled-components';
import locale from '../intl/fr.json';

const ADDRESS = '10 Rue des Gris, 51190 Avize';
const EMAIL = 'earl.ghys@wanadoo.fr';
const PHONE_NUMBER = '06 48 71 50 64';
const ICON_SIZE = 42;

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;

    & > * {
        max-width: 70%;
    }
`;

const StyledTitle = styled.h2`
    font-size: 3em;
    margin: 20px 0;
    font-style: italic;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
        text-align: center;
    }
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 2em 0;

    @media (max-width: 999px) {
        flex-direction: column;

        & > * {
            margin: 1em 0;
        }
    }
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0px;

    & > * {
        margin: 0.5em 0;
    }

    a {
        cursor: pointer;
        color: black;
        text-decoration: none;
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
        outline: none;
        padding: 8px;
        text-align: center;
        font-size: 1em;
        :focus::-webkit-input-placeholder {
            color: transparent;
        }
        :focus:-moz-placeholder {
            color: transparent;
        } /* FF 4-18 */
        :focus::-moz-placeholder {
            color: transparent;
        } /* FF 19+ */
        :focus:-ms-input-placeholder {
            color: transparent;
        } /* IE 10+ */

        &::placeholder {
            font-style: italic;
            color: #a0a0a0;
        }
    }
`;

const Contact = ({ intl }) => {
    return (
        <StyledContact>
            <StyledTitle>{intl.formatMessage({ id: 'contact.title' })}</StyledTitle>
            <TextWrapper>
                {locale.contact.text.map((x, index) => (
                    <p>{intl.formatMessage({ id: `contact.text.${index}` })}</p>
                ))}
            </TextWrapper>
            <InfoWrapper>
                <StyledInfo>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
                    >
                        <FaMapMarkedAlt size={ICON_SIZE} />
                    </a>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://goo.gl/maps/kuQhNUTh4LGPJDn48"
                    >
                        {ADDRESS}
                    </a>
                </StyledInfo>
                <StyledInfo>
                    <a href={`mailto:${EMAIL}`}>
                        <IoIosMail size={ICON_SIZE} />
                    </a>
                    <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                </StyledInfo>
                <StyledInfo>
                    <a href={`tel:+${PHONE_NUMBER}`}>
                        <MdPhone size={ICON_SIZE} />
                    </a>
                    <a href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
                </StyledInfo>
            </InfoWrapper>
        </StyledContact>
    );
};

export default injectIntl(Contact);
