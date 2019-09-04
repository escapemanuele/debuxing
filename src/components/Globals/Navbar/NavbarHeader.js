import React from 'react'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import {styles} from '../../../utils'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const NavbarHeader = ({handleNavbar}) => {

    return (
        <HeaderWrapper>
            <AniLink className="brandName" fade to="/">
                {`{`} DE<span>BUX</span>ING {`}`} 
            </AniLink>
            <FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
        </HeaderWrapper>
    )
}


const HeaderWrapper = styled.div`
    padding: 0.4rem 1rem;
    display: flex;
    align-items:center;
    justify-content: space-between;

    .brandName {
        letter-spacing: 0.2rem;
        font-size: 2rem;

        color: ${styles.colors.mainWhite};

        span {
            color: ${styles.colors.mainBlue};
        }
    }
    
    .toggle-icon {
        font-size:1.75rem;
        cursor: pointer;
        color: ${styles.colors.mainBlue};
    }

    @media (min-width:768px) {
        .toggle-icon {
            display: none;
        }
    }
`

export default NavbarHeader
