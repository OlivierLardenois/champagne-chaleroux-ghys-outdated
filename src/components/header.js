import React from 'react';
import styled from 'styled-components';

const HeaderItem = styled.div`
    margin: 0 20px;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

const HeaderItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    height: 60px;
    width: 100%;
    border: solid;
`;

const LogoWapper = styled.div``;

const Header = () => (
    <StyledHeader>
        <LogoWapper />
        <HeaderItems>
            <HeaderItem>
                <a>Présentation</a>
            </HeaderItem>
            <HeaderItem>
                <a>Accès</a>
            </HeaderItem>
            <HeaderItem>
                <a>Contact</a>
            </HeaderItem>
        </HeaderItems>
    </StyledHeader>
);

export default Header;
