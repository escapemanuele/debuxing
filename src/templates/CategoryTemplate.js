import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { Section } from '../utils';

const CategoryTemplate = () => {

    const {data} = useStaticQuery(query)
    console.log(data)

    return (
        <Layout>
            <SEO title={data.category.name} />
            <Section>
                <h1>{data.category.name}</h1>
            </Section>
        </Layout>
    )
}

const query = graphql`
    query ($id: Int!){
        category:wordpressCategory(wordpress_id:{eq: $id}) {
            name
        }
        posts:allWordpressPost (filter:{categories:{elemMatch:{wordpress_id:{eq:$id}}}}){
            edges {
                node {
                    slug
                }
            }
        }
    }
`

export default CategoryTemplate
