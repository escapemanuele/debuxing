import React from 'react'
import {Link} from 'gatsby'

const PostCard = ({post}) => {
    return (
        <article>
            <Link to={`/${post.slug}`} >{post.title}</Link>
        </article>
    )
}

export default PostCard
