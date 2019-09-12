import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Header, BannerImage} from '../utils'
import LatestPosts from '../components/Blog/LatestPosts'
import Categories from "../components/Blog/Categories";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header img={data.background.childImageSharp.fluid}>
      <BannerImage img={data.bannerImage.childImageSharp.fluid} alt="Debuxing" />
    </Header>
    <LatestPosts />
    <Categories />
  </Layout>
)

export const query = graphql`
{
  background:file(relativePath:{eq:"bcg/cover-debuxing.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  bannerImage:file(relativePath:{eq:"debuxing-logo.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`


export default IndexPage
