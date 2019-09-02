import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import { Section, styles, ObliqueBorder, Header, Banner } from '../utils'
import styled from 'styled-components'

const PostTemplate = ({data}) => {
    return (
        <Layout>
            <SEO title={data.post.title} />
            <Header img={data.background.childImageSharp.fluid}>
                <Banner title={data.post.title} />
            </Header>
            <Section>
            <ObliqueBorder />
                <PostWrapper>
                    <h1 className="title">{data.post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: data.post.content}} />
                </PostWrapper>
            </Section>
        </Layout>
    )
}

const PostWrapper = styled.div`

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
        post:wordpressPost(wordpress_id:{eq: $id}) {
            title
            content
            author {
                name
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

export default PostTemplate
