import React from 'react'
import styled from 'styled-components'
import {graphql} from 'gatsby'
import {styles, Section} from '../../utils'
import Img from 'gatsby-image'

const Gallery = ({data}) => {

    return (
        <Section>
            <GalleryWrapper>
                <div className="item item-1">
                    <Img fluid={data.img1.childImageSharp.fluid} />
                    <p className="info">awesome pizza</p>
                </div>
                <div className="item item-2">
                    <Img fluid={data.img2.childImageSharp.fluid} />
                    <p className="info">awesome pizza</p>
                </div>
                <div className="item item-3">
                    <Img fluid={data.img3.childImageSharp.fluid} />
                    <p className="info">awesome pizza</p>
                </div>
            </GalleryWrapper>
        </Section>
    )
}

const GalleryWrapper = styled.div`

`

export const query = graphql`
query {
  img1:file(relativePath:{eq:"homeGallery/img-1.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img2:file(relativePath:{eq:"homeGallery/img-2.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  img3:file(relativePath:{eq:"homeGallery/img-3.jpeg"}) {
    childImageSharp {
      fluid(maxWidth:500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

export default Gallery
