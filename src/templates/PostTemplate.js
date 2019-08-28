import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import { Section } from '../utils';

const PostTemplate = ({data}) => {
    return (
        <Layout>
            <SEO title={data.post.title} />
            <Section>
                <h1>{data.post.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: data.post.content}} />
            </Section>
        </Layout>
    )
}

export const query = graphql`
    query ($id: Int!){
        post:wordpressPost(wordpress_id:{eq: $id}) {
            title
            content
            author {
                name
            }
        }
    }
`

export default PostTemplate
