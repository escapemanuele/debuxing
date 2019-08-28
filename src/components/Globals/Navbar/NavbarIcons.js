import React, { useState } from 'react'
import styled from 'styled-components'
import {styles} from '../../../utils/index'
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

const NavbarIcons = () => {

    const [icons] = useState(iconsList)

    return (
        <IconWrapper>
            {
                icons.map((icon) => {
                    return (
                        <a href={icon.path} key={icon.id} target="_blank" rel="noopener noreferrer">
                            {icon.icon}
                        </a>
                    )
                })
            }
        </IconWrapper>
    )
}

const iconsList = [
    {
        id:1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https:/www.google.com'
    },
    {
        id:2,
        icon: <FaTwitter className="icon twitter-icon" />,
        path: 'https:/www.google.com'
    },
    {
        id:3,
        icon: <FaInstagram className="icon instagram-icon" />,
        path: 'https:/www.google.com'
    },
]

const IconWrapper = styled.div`
    .icon {
        font-size: 1.3rem;
        cursor: pointer;
        ${styles.transObject({})};
    }
    .icon:hover {
        color: ${styles.colors.mainYellow};
    }

    .facebook-icon {
        color: #3b579d;
    }
    .twitter-icon {
        color: #3ab7f0;
    }
    .instagram-icon {
        color: #da5f53;
    }

    display:none;
    @media (min-width:768px) {
        display: flex;
        width: 10rem;
        justify-content: space-around;
    }
    
`

export default NavbarIcons
