import React from 'react';
import Select from 'react-select';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const LANGUAGES = [{ value: 'en', label: 'English' }, { value: 'fr', label: 'Français' }];

const Language = () => {
    function handleChange(value, currentLocale) {
        if (value !== currentLocale) changeLocale(value);
    }

    return (
        <IntlContextConsumer>
            {({ language: currentLocale }) => (
                <Select
                    value={LANGUAGES.find(({ value }) => value === currentLocale)}
                    onChange={({ value }) => handleChange(value, currentLocale)}
                    options={LANGUAGES}
                />
            )}
        </IntlContextConsumer>
    );
};

export default Language;
