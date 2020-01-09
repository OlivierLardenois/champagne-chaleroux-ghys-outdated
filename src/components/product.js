import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';
import React from 'react';
import styled from 'styled-components';
import { blackground } from '../colors';

const StyledProduct = styled.div`
    display: flex;
    flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
    margin: auto;
    width: 900px;
    color: white;

    @media (max-width: 999px) {
        flex-direction: column;
        max-width: 400px;
        width: 80%;
    }
`;

const Description = styled.div`
    display: flex;
    padding: 0 20px;
    box-shadow: inset 0px 0px 5px 0px #656565;
    align-items: center;
    background-color: ${blackground};

    @media (max-width: 999px) {
        padding: 40px;
        text-align: center;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    @media (min-width: 1000px) {
        ${props => (props.reverse ? `border-top-left-radius: 10px;` : null)};
        ${props => (props.reverse ? `border-bottom-left-radius: 10px;` : null)};
        ${props => (!props.reverse ? `border-top-right-radius: 10px;` : null)};
        ${props => (!props.reverse ? `border-bottom-right-radius: 10px;` : null)};
    }
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
                        style={{ minWidth: '200px', height: '300px' }}
                        fluid={image.node.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                        alt=""
                    />
                    <Description reverse={reverse}>{children}</Description>
                </StyledProduct>
            );
        }}
    />
);

export default Product;
