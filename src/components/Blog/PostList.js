import React from 'react'
import { Link } from 'gatsby'
import { Section, Title, styles } from '../../utils';
import PostCard from './PostCard';
import styled from 'styled-components'

const PostList = ({posts}) => {

    return (
        <Section>
            <PostListWrapper>
            {
                posts.map(({node}) => {
                    return (
                      <Link to={`/${node.slug}`} key={node.id}>
                        <PostCard post={node}  />
                      </Link>
                    )
                })
            }
            </PostListWrapper>
        </Section>
    )
}

const PostListWrapper = styled.div`

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

export default PostList
