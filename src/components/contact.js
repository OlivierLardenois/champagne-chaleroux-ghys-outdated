import { injectIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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

const StyledTitle = styled.h1`
    font-family: cursive, sans-serif;
    font-size: 3em;
    margin: 20px 0;
    font-style: italic;
    text-decoration: underline;
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

const StyledInput = styled.input`
    height: 20px;
    width: 200px;
    margin: 10px 0;
    border: none;
    border-bottom: 1px solid;
`;

const StyledTextarea = styled.textarea`
    height: 120px;
    width: 400px;
    margin: 25px 0;
    resize: none;
    border-radius: 30px;

    @media (max-width: 500px) {
        width: 90%;
    }
`;

const StyledButton = styled.button`
    border-radius: 8px;
    padding: 8px;
    height: 40px;
    min-width: 120px;
    font-size: 1em;
    margin-top: 25px;
`;

const ContactForm = ({ intl }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [captcha, setCaptcha] = useState(false);

    function onChange(value) {
        if (value) setCaptcha(true);
    }

    function handleSubmit(event) {
        // @TODO: Look at Formik
        // Send captcha value to backend in order to verify it, then send mail
        event.preventDefault();
        // eslint-disable-next-line no-alert
        return captcha ? window.alert('Email sent') : window.alert('Verify captcha');
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                placeholder={intl.formatMessage({ id: 'name' })}
                value={name.toString()}
                onChange={e => setName(e.target.value)}
            />
            <StyledInput
                type="text"
                placeholder={intl.formatMessage({ id: 'mail' })}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <StyledTextarea
                placeholder={intl.formatMessage({ id: 'message' })}
                cols="40"
                rows="5"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <ReCAPTCHA
                sitekey="6Lf0_pwUAAAAAEyNx2mMJAVU-H8ymMG3PqVV6wSg"
                onChange={onChange}
            />
            <StyledButton type="submit">
                {intl.formatMessage({ id: 'send' })}
            </StyledButton>
        </StyledForm>
    );
};

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
