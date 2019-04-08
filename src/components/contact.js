import React, { useState } from 'react';
import styled from 'styled-components';

const EMAIL = 'email@gmail.com';

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    input,
    textarea {
        border: 1px solid;
    }
`;

const StyledTextarea = styled.textarea`
    resize: none;
`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    return (
        <>
            <InfoWrapper>
                <p>15 Rue de la Paix, 75000 Paris</p>
                <p>+33 (0)1 23 45 67 89</p>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </InfoWrapper>
            <StyledForm>
                <input
                    type="text"
                    placeholder="Nom"
                    value={name.toString()}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <StyledTextarea
                    placeholder="Message"
                    cols="40"
                    rows="5"
                    value={text}
                    onChange={e => setText(e.target.value)}
                    required
                />
                <button type="submit">Envoyer</button>
            </StyledForm>
        </>
    );
};

export default Contact;
