import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BannerImage = ({img, alt}) => {
    return (
        <BannerImageWrapper>
            <AniLink fade to="/">
                <Img fluid={img} alt={alt} className="image-header-banner" />
            </AniLink>
        </BannerImageWrapper>
    )
}

const BannerImageWrapper = styled.div`
    width: 40vw;
`

export default BannerImage
