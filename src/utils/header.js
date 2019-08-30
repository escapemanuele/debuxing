import React from 'react'
import styled from 'styled-components'
import {styles} from '../utils'
import BackgroundImage from 'gatsby-background-image'

const Header = ({img, big, children}) => {

    return (
        <HeaderWrapper big={big}>
            <div className="svg-container nav-svg svg-block">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1950 150">
                <g transform="translate(0,-902.36218)"></g>
                <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                <path d="M 0,150 0,0 1925,0"></path>
                </svg>
            </div>
            <BackgroundImage fluid={img} className="wrapper-background-image">
                {children}
            </BackgroundImage>
            <div className="svg-container header-svg svg-block">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1890 150">
                    <g transform="translate(0,-902.36218)"></g>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                    <path d="m 1925,0 0,150 -1925,0"></path>
                </svg>
            </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`

    
    .nav-svg{
        position: relative;
        z-index: 11;
        margin-bottom: -7.81%;
    }

    .header-svg{
        position: relative;
        z-index: 11;
        margin-top: -7.81%;
    }

    .svg-block {
        stroke: none;
        fill: ${styles.colors.mainBlack};
    }

    .svg-container {
        bottom: 0;
        width: 100%;
    }
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
