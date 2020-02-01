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
        max-width: 300px;
        width: 80%;
    }
`;

const Description = styled.div`
    display: flex;
    padding: 0 20px;
    box-shadow: inset 0px 0px 5px 0px #656565;
    align-items: center;
    background-color: ${blackground};
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2 {
        margin: 0;
    }

    @media (max-width: 999px) {
        padding: 40px;
        text-align: center;
    }
`;

const ImageWrapper = styled.div`
    display: block;

    @media (max-width: 999px) {
        max-width: 300px;
    }
    @media (min-width: 999px) {
        min-width: 250px;
        min-width: 250px;
    }
`;

const Product = ({ children, imgName, reverse }) => (
    <StaticQuery
        query={graphql`
            query {
                allImageSharp {
                    edges {
                        node {
                            fluid(maxWidth: 300) {
                                ...GatsbyImageSharpFluid_withWebp
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
                    <ImageWrapper>
                        <Img
                            fluid={image.node.fluid}
                            objectFit="cover"
                            objectPosition="50% 50%"
                            alt=""
                        />
                    </ImageWrapper>
                    <Description reverse={reverse}>
                        <h2>{children[0]}</h2>
                        <p>{children[1]}</p>
                    </Description>
                </StyledProduct>
            );
        }}
    />
);

export default Product;
