import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Header, Banner } from '../utils'
import {graphql} from 'gatsby'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <Header img={data.img.childImageSharp.fluid}>
      <Banner title="about us" subtitle={`we're funny`} />
    </Header>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"bcg/aboutBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`


export default AboutPage
