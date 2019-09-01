import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { Section, Title } from '../../utils';
import CategoryCard from './CategoryCard';
import styled from 'styled-components'

const Categories = () => {

    const {cats} = useStaticQuery(query)

    return (
        <Section>
            <Title title="categories" />
            <CategoriesWrapper>
            {
                cats.edges.map(({node}) => {
                    return (
                        <Link key={node.id} to={`/${node.slug}`}>
                            <CategoryCard  category={node} />
                        </Link>
                    )
                })
            }
            </CategoriesWrapper>
        </Section>
    )
}

const CategoriesWrapper = styled.div`

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

const query = graphql`
 {
    cats:allWordpressCategory(filter:{count:{gt:0}}) {
                edges {
                    node {
                        slug
                        id:wordpress_id
                        name
                    }
                }
            }
}
`
export default Categories
