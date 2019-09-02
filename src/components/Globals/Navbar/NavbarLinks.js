import React, {useState} from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {styles} from '../../../utils'

const NavbarLinks = ({navbarOpen}) => {

    const [links, setLinks] = useState(menuLinks)

    return (
        <LinkWrapper open={navbarOpen}>
            {
                links.map((link) => {
                    return (
                        <li key={link.id}>
                            <Link to={link.path} className="nav-link">{link.name}</Link>
                        </li>
                    )
                })
            }
        </LinkWrapper>
    )
}

const menuLinks = [
    {
        id: 0,
        path:'/',
        name:'home'
    },
    {
        id: 1,
        path:'/blog',
        name: 'blog'
    },
    {
        id: 2,
        path:'/contact',
        name:'contact'
    },
]

const LinkWrapper = styled.ul`
    li {
        list-style-type: none;
    }
    .nav-link {
        display:block;
        text-decoration: none;
        padding: 0.5rem 1rem;
        color: ${styles.colors.mainWhite};
        font-weight: 700;
        text-transform: capitalize;
        cursor: pointer;
        ${styles.transDefault};
        &:hover{
            background: ${styles.colors.mainBlue};
            color: ${styles.colors.mainWhite};
            padding: 0.5rem 1rem 0.5rem 1.3rem;
        }
    }

    height: ${props => (props.open)? '152px' : '0px'};
    overflow: hidden;
    ${styles.transObject({time:'1s'})};

    @media(min-width:768px){
        display: flex;
        margin: 0 auto;
        height: auto;

        .nav-link:hover {
            padding: 0.5rem 1rem 0.5rem 1rem;
        }
    }
    

`

export default NavbarLinks
