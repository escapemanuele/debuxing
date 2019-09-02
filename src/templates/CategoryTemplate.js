import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { Section, Header, Banner, ObliqueBorder, styles } from '../utils';
import styled from 'styled-components'
import PostList from '../components/Blog/PostList';

const CategoryTemplate = ({data}) => {


    return (
        <Layout>
            <SEO title={data.category.name} />
            <Header img={data.background.childImageSharp.fluid}>
                <Banner title={data.category.name} />
            </Header>
            <Section>
                    <PostList posts={data.posts.edges} />
            </Section>
        </Layout>
    )
}

const CategoryWrapper = styled.div`

    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    padding: 6rem 2rem;;

    .title {
        margin-bottom: 3rem;
        text-align: center;
        font-size: 2rem;
    }
`

export const query = graphql`
    query ($id: Int!){
        category:wordpressCategory(wordpress_id:{eq: $id}) {
            name
        }
        posts:allWordpressPost (filter:{categories:{elemMatch:{wordpress_id:{eq:$id}}}}){
            edges {
                node {
                    slug
                    title
                }
            }
        }
        background:file(relativePath:{eq:"bcg/cover-debuxing.jpg"}) {
            childImageSharp {
                fluid {
                ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

export default CategoryTemplate
