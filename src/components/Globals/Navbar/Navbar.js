import React, {useState} from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
    }

    return (
        <NavWrapper>
            <NavbarHeader handleNavbar={handleNavbar} />
            <NavbarLinks navbarOpen={navbarOpen} />
            <NavbarIcons />
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    @media (min-width: 768px) {
        display:flex;
        align-items: center;
    }
`

export default Navbar
