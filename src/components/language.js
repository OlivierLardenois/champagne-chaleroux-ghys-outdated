import React from 'react';
import styled from 'styled-components';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const Dropdown = styled.div`
    position: relative;
    display: inline-block;

    & > ul {
        padding: 0;
        margin: 0;
        width: 100%;
        display: none;
        position: absolute;
        box-shadow: 0px 3px 8px 1px #e5e5e5;
        background-color: white;

        & > li {
            text-decoration: none;
            display: block;

            &:hover {
                background-color: #f4f4f4;
            }

            & > div {
                padding: 10px 20px;
                cursor: pointer;
                height: 100%;
                width: 100%;
            }
        }
    }

    &:hover {
        & > ul {
            display: block;
        }
    }
`;

const DropdownTrigger = styled.div`
    cursor: pointer;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

const Language = () => {
    function handleChange(value, currentLocale) {
        if (value !== currentLocale) changeLocale(value);
    }

    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */
    return (
        <IntlContextConsumer>
            {({ languages, language: currentLocale }) => (
                <Dropdown>
                    <DropdownTrigger>{currentLocale.toUpperCase()}</DropdownTrigger>
                    <ul>
                        {languages.map(lang => (
                            <li>
                                <div onClick={() => handleChange(lang, currentLocale)}>
                                    {lang.toUpperCase()}
                                </div>
                            </li>
                        ))}
                    </ul>
                </Dropdown>
            )}
        </IntlContextConsumer>
    );
};

export default Language;
