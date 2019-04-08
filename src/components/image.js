import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                file(relativePath: { eq: "background.jpg" }) {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img
                style={{ width: '100%', height: '600px' }}
                fluid={data.file.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%"
                alt=""
            />
        )}
    />
);
export default Image;
