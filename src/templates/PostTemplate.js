import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import { Section, styles, ObliqueBorder, Header, Banner, Title } from '../utils'
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
                    <Title title={data.post.title} className="title" />
                    <div className="content" dangerouslySetInnerHTML={{ __html: data.post.content}} />
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
        font-weight: normal;
    }

    .content {
        width: 80vw;
        margin: 0 auto;
        margin-top: 3rem;

        .codecolorer-container {
            white-space: nowrap;
            width:100%;
            background-color: ${styles.codeColorer.codeColorerBackground};
            border: ${styles.codeColorer.codeColorerBorder};
            margin-top: 2rem;
            margin-bottom: 1.2rem;
        }
        .codecolorer {
            padding: 1rem;
            text-align:left;
        }

        .aligncenter {
            display: block;
            clear: both;
            margin: 0;
            max-width: 100%;
            height: auto;
        }

        @media (${styles.device.tablet}) {
            .aligncenter {
                margin: auto;
                margin-top: 2rem;
            }
        }
    }

    @media (${styles.device.tablet}) {
        .content {
            width: 60vw;
        }
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
