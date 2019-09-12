import React from 'react'
import { Section } from '../../utils';
import ElementCard from './ElementCard';
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const PostList = ({posts}) => {

    return (
        <Section>
            <PostListWrapper>
            {
                posts.map(({node}) => {
                    return (
                      <AniLink fade to={`/${node.slug}`} key={node.id}>
                        <ElementCard title={node.title}  />
                      </AniLink>
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
