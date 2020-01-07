import { injectIntl } from 'gatsby-plugin-intl';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styled from 'styled-components';
import locale from '../intl/fr.json';

const EMAIL = 'email@gmail.com';
const PHONE_NUMBER = '01 23 45 67 89';

const StyledContact = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 0;
`;

const StyledTitle = styled.h1`
    font-family: cursive, sans-serif;
    font-size: 3em;
    margin: 20px 0;
    font-style: italic;
    text-decoration: underline;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;

    * {
        margin: 10px 0;
        max-width: 70%;
        text-align: center;
    }
`;

const StyledEmail = styled.a`
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    margin-top: 30px;
`;

const StyledPhone = styled.a`
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
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
            <InfoWrapper>
                {locale.contact.text.map((x, index) => (
                    <p>{intl.formatMessage({ id: `contact.text.${index}` })}</p>
                ))}
                <StyledEmail href={`mailto:${EMAIL}`}>{EMAIL}</StyledEmail>
                <StyledPhone href={`tel:+${PHONE_NUMBER}`}>{PHONE_NUMBER}</StyledPhone>
            </InfoWrapper>
        </StyledContact>
    );
};

export default injectIntl(Contact);
