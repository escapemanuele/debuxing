import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Section, Title } from '../../utils';
import PostCard from './PostCard';

const LatestPosts = () => {

    const {posts} = useStaticQuery(query)

    return (
        <Section>
            <Title title="latest blog posts" />
            {
                posts.edges.map(({node}) => {
                    return (
                        <PostCard post={node} key={node.id} />
                    )
                })
            }
        </Section>
    )
}

export const query = graphql`
 {
  posts:allWordpressPost( limit:6, sort:{fields: date,order:DESC}){
    edges {
      node {
        title
        id
        slug
        date(formatString:"MMMM Do, YYYY")
      }
    }
  }
}
`
export default LatestPosts
