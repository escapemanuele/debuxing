import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import { Header, Banner } from '../utils'


const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Contact" />
    <Header img={data.img.childImageSharp.fluid}>
      <Banner title="contact us" subtitle="anything.." />
    </Header>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"bcg/contactBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`


export default ContactPage