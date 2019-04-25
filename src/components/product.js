import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const StyledProduct = styled.div`
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    margin: auto;
    width: 900px;
`;

const Description = styled.div`
    display: flex;
    padding: 0 20px;
    box-shadow: inset 0px 0px 5px 0px #656565;
    align-items: center;
`;

const Product = ({ children, imgName, reverse }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 500) {
                                ...GatsbyImageSharpFluid
                                originalName
                            }
                        }
                    }
                }
            }
        `}
        render={data => {
            const image = data.allImageSharp.edges.find(
                edge => edge.node.fluid.originalName === imgName
            );
            if (!image) return null;
            return (
                <StyledProduct reverse={reverse}>
                    <Img
                        style={{ 'min-width': '200px', height: '300px' }}
                        fluid={image.node.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt=""
                    />
                    <Description>{children}</Description>
                </StyledProduct>
            );
        }}
    />
);

export default Product;
