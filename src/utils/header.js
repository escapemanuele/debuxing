import React from 'react'
import styled from 'styled-components'
import {styles, ObliqueBorder} from '../utils'
import BackgroundImage from 'gatsby-background-image'

const Header = ({img, big, children}) => {

    return (
        <HeaderWrapper big={big}>
            <ObliqueBorder />
            <BackgroundImage fluid={img} className="wrapper-background-image">
                {children}
            </BackgroundImage>
            <ObliqueBorder bottom />
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`

    

    .wrapper-background-image {
        min-height: calc(${props => (props.big)? 100 : 60}vh - 68px);
        display: flex;
        align-items: center;
        justify-content: center;
        background-position: center;
        opacity: 1!important;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background: linear-gradient(rgba(0,0,0,0.4), rgba(24,2,12,0.4));
        padding-top: 6rem;
        padding-bottom: 6rem;
    }

`


export {Header}
