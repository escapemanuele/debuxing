import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {styles} from '../../utils'

const PostCard = ({post}) => {
    return (
        <PostCardWrapper >
            <div className="svg-container post-svg svg-block">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1950 150">
                    <g transform="translate(0,-902.36218)"></g>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="M 0,150 0,0 1925,0"></path>
                </svg>
            </div>	
            <div className="post-inner no-thumb">
                <header className="entry-header">
                    <h2 className="entry-title">
                        <Link to={`/${post.slug}`} rel="bookmark">{post.title}</Link>
                    </h2>
                    <div className="entry-meta">
                        <span className="posted-on">
                            <a href="http://debuxing.com/sql-alter-column-size/" rel="bookmark">
                                <time className="entry-date published updated" datetime="2018-11-07T16:31:25+00:00">November 7, 2018</time>
                            </a>
                        </span>
                        <span className="byline"> 
                            <span className="author vcard">
                                <a className="url fn n" href="http://debuxing.com/author/koldand/">Emanuele Buccelli</a>
                            </span>
                        </span>
                        <span className="cat-link">
                            <a href="http://debuxing.com/category/programming/sql-programming/">SQL</a>
                        </span>			
                    </div>
                </header>

                <div className="entry-content">
                    <p>It could happen that in your SQL Server Database you have to change the size of a column. To do that you can use the ALTER TABLE statement. The first thing you should know is[…]</p>
                </div>
            </div>
            <Link  className="read-more" to={`/${post.slug}`} >Continue reading …	</Link>

            <div className="svg-container post-bottom-svg svg-block">
                
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1890 150">
                    <g transform="translate(0,-902.36218)"></g>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 1925,0 0,150 -1925,0"></path>
                </svg>
            </div>	
        </PostCardWrapper>
    )
}

const PostCardWrapper = styled.article`


    .post-inner {
        background: ${styles.colors.mainWhite};
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

    .read-more {
        background: ${styles.colors.mainBlue};
    }
`

export default PostCard
