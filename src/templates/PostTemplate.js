import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import { SectionSidebar, styles, Header, Banner, Title } from '../utils'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import {DiscussionEmbed} from 'disqus-react'
import LeaveComment from '../components/Globals/LeaveComment'
import AffiliateText from '../components/Globals/AffiliateText';

const PostTemplate = ({data}) => {
    const disqusConfig = {
        shortname: process.env.GATSBY_DISQUS_NAME,
        config: {identifier: data.post.slug}
    }


    return (
        <Layout>
            <SEO title={data.post.title} />
            <Header img={data.background.childImageSharp.fluid}>
                <Banner title={data.post.title} />
            </Header>
            <PostWrapper className="item-content">
                <div className="back_container">
                    <AniLink fade to="/blog" className="btn back">Back to articles</AniLink>
                </div>
                <Title title={data.post.title} className="title" />
                <div className="content" dangerouslySetInnerHTML={{ __html: data.post.content}} />
                <LeaveComment />
                <DiscussionEmbed className="disqus-board" {...disqusConfig} />
            </PostWrapper>
        </Layout>
    )
}



const PostWrapper = styled.div`

    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    margin: 0 auto;
    padding: 2rem;
    overflow: hidden;
    width: 90%;

    .back_container {
        text-align: center;
    }

    @media (min-width:${styles.size.tablet}) {
        .back_container{
            text-align: left;
        }
    }

    .back {
        ${styles.border({color: `${styles.colors.mainBlue}`})};
        padding: 1rem;
        margin-bottom: 2rem;
        
        display: inline-block;
    }

    .title {
        font-weight: normal;
    }

    #disqus_thread {
        margin-top: 2rem;
    }

    #toc_container {
            display: none;
        }

    .content {
        margin-top: 3rem;

        .codecolorer-container {
            white-space: nowrap;
            width:100%!important;
            background-color: ${styles.codeColorer.codeColorerBackground};
            border: ${styles.codeColorer.codeColorerBorder};
            margin-top: 2rem;
            margin-bottom: 1.2rem;
        }
        .codecolorer {
            padding: 1rem;
            text-align:left;
        }


        .aligncenter, img {
            display: block;
            clear: both;
            margin: 0;
            max-width: 100%;
            height: auto;
        }

        .gatsby-image-wrapper {
            max-width: 60%!important;
            margin: 1rem auto 1rem auto;
        }

        

        @media (min-width:${styles.size.tablet}) {
            .aligncenter {
                margin: auto;
                margin-top: 2rem;
            }
        }
    }
`

const AsideWrapper = styled.aside`

    text-align: center;
    
    .aside-related {
        display: block;
        margin-bottom: 1.2rem;
        padding: 0.8rem;
        color: ${styles.colors.mainWhite};
        ${styles.border({color:`${styles.colors.mainBlue}`})};
    }

    h3 {
        text-transform: uppercase;
    }
`

export const query = graphql`
    query ($id: Int!){
        post:wordpressPost(wordpress_id:{eq: $id}) {
            slug
            title
            content
            author {
                name
            }
            # jetpack_related_posts {
            #     title
            #     url
            # }
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
