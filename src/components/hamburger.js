import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby-plugin-intl';
import { CSSTransition } from 'react-transition-group';

import { MobileLanguage } from './language';

const StyledHamburger = styled.div`
    display: flex;
`;

const MenuToogle = styled.div`
    cursor: pointer;
    margin: auto 50px;
    user-select: none;
    z-index: 1;

    span {
        display: block;
        position: relative;
        width: 33px;
        height: 4px;
        margin-bottom: 5px;
        background: #cdcdcd;
        border-radius: 3px;

        transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
            background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
    }

    span:first-child {
        transform-origin: 0 0;
    }
    span:last-child {
        transform-origin: 3px 6px;
    }
    span {
        ${props =>
            props.showMenu
                ? `transform: rotate(45deg) translate(-2px, -1px);
                background: #232323;`
                : null};
    }
    span:nth-last-child(2) {
        ${props =>
            props.showMenu
                ? `transform: rotate(0deg) scale(0.2, 0.2);
                opacity: 0;`
                : null}
    }
    span:nth-last-child(1) {
        ${props =>
            props.showMenu ? 'transform: rotate(-45deg) translate(0, -1px)' : null};
    }
`;

const Menu = styled.ul`
    position: absolute;
    top: 60px;
    margin: 0;
    height: 100vh;
    width: 70%;
    border-top: solid black;
    background: white;
    padding: 0;

    visibility: ${props => (props.showMenu ? 'visible' : 'hidden')};
    transform: ${props => (props.showMenu ? 'translate(-100%, 0)' : 'none')};
    transition: visibility 0.5s, transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);

    & > a {
        color: black;
        font-size: 0.8em;
        text-decoration: none;
    }

    li {
        display: block;
        padding: 8px 0 8px 30px;
        font-size: 22px;
        cursor: pointer;
    }
`;

const Background = styled.div`
    position: absolute;
    top: 60px;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: black;
    opacity: 0.5;
    transition: opacity 500ms;

    &.fade-enter {
        opacity: 0;
    }
    &.fade-enter-active {
        opacity: 0.5;
    }

    &.fade-exit {
        opacity: 0.5;
    }
    &.fade-exit-active {
        opacity: 0;
    }
`;

const Hamburger = ({ className, pages }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledHamburger className={className}>
            <CSSTransition in={showMenu} classNames="fade" timeout={500} unmountOnExit>
                <Background onClick={() => showMenu && setShowMenu(!showMenu)} />
            </CSSTransition>

            <MenuToogle showMenu={showMenu} onClick={() => setShowMenu(!showMenu)}>
                <span />
                <span />
                <span />
            </MenuToogle>

            <div>
                <Menu showMenu={showMenu}>
                    {pages.map(({ label, link }) => (
                        <Link to={link}>
                            <li>{label}</li>
                        </Link>
                    ))}
                    <MobileLanguage />
                </Menu>
            </div>
        </StyledHamburger>
    );
};

export default Hamburger;

//@ TODO: Add key props on list || add language to hamburger
