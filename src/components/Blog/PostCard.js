import React from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'

const PostCard = ({post}) => {
    return (
        <PostCardWrapper>
            {/*<div className="svg-container post-svg svg-block">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1950 150">
                    <g transform="translate(0,-902.36218)"></g>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="M 0,150 0,0 1925,0"></path>
                </svg>
    </div>	*/}
            <div className="post-inner">
                <header className="entry-header">
                    <h2 className="entry-title">
                        {post.title}
                    </h2>
                </header>
            </div>
        </PostCardWrapper>
    )
}

const PostCardWrapper = styled.article`

    box-shadow: ${styles.shadows.lightShadow};
    ${styles.transDefault};
    height:100%;

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

    @media (${styles.device.tablet}){
        .entry header {
            padding: 2rem 1.5rem 1.5rem;
        }
    }

    .entry-title {
        text-decoration: none;
        color: ${styles.colors.mainBlack};
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
