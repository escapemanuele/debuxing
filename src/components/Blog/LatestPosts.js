import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Section, Title, styles } from '../../utils';
import PostList from './PostList';

const LatestPosts = () => {

    const {posts} = useStaticQuery(query)

    return (
        <Section>
            <Title title="latest blog posts" />
            <PostList posts={posts.edges} />
        </Section>
    )
}

export const query = graphql`
 {
  posts:allWordpressPost( limit:6, sort:{fields: date,order:DESC}){
    edges {
      node {
        
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
