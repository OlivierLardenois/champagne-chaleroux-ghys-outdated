import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/layout';

const ImagesGrid = styled.section`
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    padding: 40px 0;
`;

const ImagesColumn = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 2px;
    max-height: 1200px;
`;

const ImageWrapper = ({ fluid }) => (
    <Img
        style={{ width: '100%', margin: '2px 0' }}
        fluid={fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt=""
    />
);

const GalleryPage = ({ data }) => (
    <Layout>
        <ImagesGrid>
            <ImagesColumn>
                <ImageWrapper fluid={data.img1.childImageSharp.fluid} />
                <ImageWrapper fluid={data.img4.childImageSharp.fluid} />
                <ImageWrapper fluid={data.img7.childImageSharp.fluid} />
            </ImagesColumn>
            <ImagesColumn>
                <ImageWrapper fluid={data.img2.childImageSharp.fluid} />
                <ImageWrapper fluid={data.img3.childImageSharp.fluid} />
                <ImageWrapper fluid={data.img5.childImageSharp.fluid} />
                <ImageWrapper fluid={data.img6.childImageSharp.fluid} />
            </ImagesColumn>
        </ImagesGrid>
    </Layout>
);

export const imageFragment = graphql`
    fragment imageFragment on File {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const query = graphql`
    query {
        img1: file(relativePath: { eq: "image1.jpg" }) {
            ...imageFragment
        }
        img2: file(relativePath: { eq: "image2.jpg" }) {
            ...imageFragment
        }
        img3: file(relativePath: { eq: "image3.jpg" }) {
            ...imageFragment
        }
        img4: file(relativePath: { eq: "image4.jpg" }) {
            ...imageFragment
        }
        img5: file(relativePath: { eq: "image5.jpg" }) {
            ...imageFragment
        }
        img6: file(relativePath: { eq: "image6.jpg" }) {
            ...imageFragment
        }
        img7: file(relativePath: { eq: "image7.jpg" }) {
            ...imageFragment
        }
    }
`;

export default GalleryPage;
