import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { Section, Title, styles } from '../../utils';
import PostCard from './PostCard';
import styled from 'styled-components'

const LatestPosts = () => {

    const {posts} = useStaticQuery(query)

    return (
        <Section>
            <Title title="latest blog posts" />
            <LatestPostsWrapper>
            {
                posts.edges.map(({node}) => {
                    return (
                      <Link to={`/${node.slug}`} key={node.id}>
                        <PostCard post={node}  />
                      </Link>
                    )
                })
            }
            </LatestPostsWrapper>
        </Section>
    )
}

const LatestPostsWrapper = styled.div`

    padding-top: 2rem;

    display: grid;
    grid-template-columns: auto;
    grid-row-gap: 1rem;

    @media (min-width:576px) {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1.5rem;
    }

    @media (min-width:768px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3rem;
    }
`

export const query = graphql`
 {
  posts:allWordpressPost( limit:6, sort:{fields: date,order:DESC}){
    edges {
      node {
        title
        id
        slug
        date(formatString:"MMMM Do, YYYY")
        content
      }
    }
  }
}
`
export default LatestPosts
