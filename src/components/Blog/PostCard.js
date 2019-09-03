import React from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'

const PostCard = ({title}) => {
    return (
        <PostCardWrapper>
            <div className="post-inner">
                <header className="entry-header">
                    <h2 className="entry-title">
                        {title}
                    </h2>
                </header>
            </div>
        </PostCardWrapper>
    )
}

const PostCardWrapper = styled.article`

    box-shadow: ${styles.shadows.lightShadow};
    ${styles.transDefault};
    height: 100%;
    
    &:hover {
        box-shadow: ${styles.shadows.darkShadow};
    }

    .post-inner {
        background: ${styles.colors.mainWhite};
        height: 100%;

        display:flex;
        align-items: center;
        justify-content: center;
        &:hover {
            background: ${styles.colors.mainBlue};
        }
    }

    .entry-header {
        text-align: center;
        padding: 1rem 0.8rem 0.8rem;
    }

    .entry-title {
        text-decoration: none;
        color: ${styles.colors.mainBlack};
        font-size: 1.0rem;
    }

    @media (min-width: ${styles.size.tablet}){
        .entry-header {
            padding: 1.2rem;
        }

        .entry-title {
            font-size: 1.5rem;
        }
    }

    
    .post-inner:hover .entry-title {
        color: ${styles.colors.mainWhite};
    }

    .header-svg{
        position: relative;
        z-index: 11;
        margin-top: -7.81%;
    }

    .svg-block {
        stroke: none;
        fill: ${styles.colors.mainBlack};
    }

    .svg-container {
        bottom: 0;
        width: 100%;
    }

    
`

export default PostCard
