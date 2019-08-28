import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { Section, Title } from '../../utils';
import CategoryCard from './CategoryCard';

const Categories = () => {

    const {cats} = useStaticQuery(query)

    return (
        <Section>
            <Title title="categories" />
            {
                cats.edges.map(({node}) => {
                    return (
                        <CategoryCard key={node.id} category={node} />
                    )
                })
            }
        </Section>
    )
}

const query = graphql`
 {
    cats:allWordpressCategory {
                edges {
                    node {
                        slug
                        id:wordpress_id
                    }
                }
            }
}
`
export default Categories
