import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import { Header, Banner } from '../utils'


const MenuPage = ({data}) => (
  <Layout>
    <SEO title="Menu" />
    <Header img={data.img.childImageSharp.fluid}>
      <Banner title='menu' subtitle={`let's dig in`} />
    </Header>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"bcg/menuBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`

export default MenuPage
