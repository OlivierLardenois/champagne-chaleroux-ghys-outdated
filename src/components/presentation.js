import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'gatsby-plugin-intl';
import { ScrollElement } from 'react-scroll';

const Presentation = ({ intl, ...rest }) => (
    <p {...rest}>
        Sea oporteat hendrerit scripserit ea. His id diam dolor ridens. Ullum veniam ei
        ius. Iuvaret gubergren consequuntur at nec. Eu qui dicam meliore conclusionemque,
        has vidisse feugiat offendit id, duo prima pericula cu. <br /> <br /> Mea nostrud
        vivendum vulputate in. Vix aperiam similique ad. Cu mel omnis tritani, in nam
        blandit indoctum, utinam viderer atomorum ex duo. An qui probo posidonium, his et
        ferri molestie. Has an gubergren torquatos, ex sea velit diceret persequeris.
    </p>
);

export default ScrollElement(injectIntl(Presentation));
