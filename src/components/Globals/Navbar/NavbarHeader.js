import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
import {styles} from '../../../utils'

const NavbarHeader = ({handleNavbar}) => {

    const {logo} = useStaticQuery(getLogo)

    return (
        <HeaderWrapper>
            <Link to="/">
                <Img fluid={logo.childImageSharp.fluid} alt="Debuxing" />
            </Link>
            <FaAlignRight className="toggle-icon" onClick={() => handleNavbar()} />
        </HeaderWrapper>
    )
}

const getLogo = graphql`
{
    logo:file(relativePath:{eq:"debuxing-icon.png"}) {
        childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`

const HeaderWrapper = styled.div`
    padding: 0.4rem 1rem;
    display: flex;
    align-items:center;
    justify-content: space-between;
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
