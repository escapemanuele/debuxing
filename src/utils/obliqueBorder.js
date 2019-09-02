import React from 'react'
import styled from 'styled-components'
import {styles} from './'

const ObliqueBorder = ({bottom}) => {
    return (
        <React.Fragment>
            {!bottom &&
                <ObliqueWrapper >
                    <div className="nav-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1950 150">
                        <g transform="translate(0,-902.36218)"></g>
                        <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                        <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                        <path d="M 0,150 0,0 1925,0"></path>
                        </svg>
                    </div>
                </ObliqueWrapper>
            }
            {bottom &&
                <ObliqueWrapper>
                    <div className="header-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1890 150">
                            <g transform="translate(0,-902.36218)"></g>
                            <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                            <path d="m 898.41609,-33.21176 0.01,0 -0.005,-0.009 -0.005,0.009 z"></path>
                            <path d="m 1925,0 0,150 -1925,0"></path>
                        </svg>
                    </div>
                </ObliqueWrapper>
            }
        </React.Fragment>
    )
}

const ObliqueWrapper = styled.span`
        position: relative;
        z-index: 11;
        bottom: 0;
        width: 100%;
        stroke: none;
        fill: ${styles.colors.mainBlack};
        
        .nav-svg{
            margin-bottom: -7.81%;
        }

        .header-svg{
            margin-top: -7.81%;
        }
`

export default ObliqueBorder
