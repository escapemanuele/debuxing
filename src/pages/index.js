import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Header, Banner, BannerButton} from '../utils'
import img from '../images/bcg/homeBcg.jpeg'
import LatestPosts from '../components/Blog/LatestPosts'
import Categories from "../components/Blog/Categories";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header img={data.img.childImageSharp.fluid} big>
      <Banner title="eatery" subtitle="55 main street. Santa Monica - California" >
        <BannerButton center>menu</BannerButton>
      </Banner>
    </Header>
    <LatestPosts />
    <Categories />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"bcg/homeBcg.jpeg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`


export default IndexPage
