import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {Header, BannerImage, BannerButton} from '../utils'
import LatestPosts from '../components/Blog/LatestPosts'
import Categories from "../components/Blog/Categories";
import { Link } from "gatsby";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header img={data.background.childImageSharp.fluid}>
      <BannerImage img={data.bannerImage.childImageSharp.fluid} alt="Debuxing" />
      {/*<Banner title="eatery" subtitle="55 main street. Santa Monica - California" >
        <BannerButton center>menu</BannerButton>
</Banner>*/}
    </Header>
    <LatestPosts />
    <div >
      <Link to="/blog">All posts</Link>
    </div>
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
