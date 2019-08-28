import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo'
import {Header, Banner} from '../utils'
import LatestPosts from '../components/Blog/LatestPosts';
import AllPosts from '../components/Blog/AllPosts';

const Blog = ({data}) => {
    return (
        <Layout>
            <SEO title="Blog" />
            <Header img={data.img.childImageSharp.fluid}>
                <Banner title='blog' subtitle={`let's dig in`} />
            </Header>
            <LatestPosts />
            <AllPosts />
        </Layout>
    )
}

export const query = graphql`
{
    img:file(relativePath:{eq:"bcg/menuBcg.jpeg"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`

export default Blog
