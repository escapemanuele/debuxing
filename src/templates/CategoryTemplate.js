import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import { Section, Header, Banner, Title, styles } from '../utils';
import PostList from '../components/Blog/PostList';

const CategoryTemplate = ({data}) => {


    return (
        <Layout>
            <SEO title={data.category.name} />
            <Header img={data.background.childImageSharp.fluid}>
                <Banner title={data.category.name} />
            </Header>
            <Section>
                    <Title title="Articles" />
                    <PostList posts={data.posts.edges} />
            </Section>
        </Layout>
    )
}

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
