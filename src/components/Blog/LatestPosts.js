import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import { Section, Title, styles } from '../../utils';
import PostList from './PostList';
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const LatestPosts = () => {

    const {posts} = useStaticQuery(query)

    return (
        <Section>
            <Title title="latest blog posts" />
            <LinkWrapper>
              <AniLink fade to="/blog" className="allPosts">All posts</AniLink>
            </LinkWrapper>
            <PostList posts={posts.edges} />
        </Section>
    )
}

const LinkWrapper = styled.div`
  text-align: center;
  margin-top: 3rem;

  .allPosts {
    ${styles.border({color: `${styles.colors.mainBlue}`})};
    padding: 1.5rem;
    font-size: 1.3rem;
    color: ${styles.colors.mainWhite};
    ${styles.transDefault};

    &:hover {
      background: ${styles.colors.mainBlue};
      border-radius: 1rem;
    }
  }
`

const query = graphql`
 {
  posts:allWordpressPost( limit:6, sort:{fields: date,order:DESC}){
    edges {
      node {
        id
        slug
        title
      }
    }
  }
}
`
export default LatestPosts
