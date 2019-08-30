import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import {styles} from '../utils'

const BannerImage = ({img, alt}) => {
    return (
        <BannerImageWrapper>
            <Link to="/">
                <Img fluid={img} alt={alt} className="image-header-banner" />
            </Link>
        </BannerImageWrapper>
    )
}

const BannerImageWrapper = styled.div`
    width: 40vw;
`

export default BannerImage
