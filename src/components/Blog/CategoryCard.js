import React from 'react'
import {Link} from 'gatsby'

const CategoryCard = ({category}) => {
    return (
        <article>
            <Link to= {`/${category.slug}`}>{category.slug}</Link>
        </article>
    )
}

export default CategoryCard
