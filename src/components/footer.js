import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    border: solid;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    width: 100%;
`;

const FooterCard = styled.div`
    border: solid;
`;

const Footer = () => (
    <StyledFooter>
        <FooterCard>
            <div>Footer</div>
        </FooterCard>
    </StyledFooter>
);

export default Footer;
