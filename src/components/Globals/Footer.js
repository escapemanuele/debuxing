import React, { useState } from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'
import {FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Footer = () => {

    const [icons] = useState(iconsList)

    return (
        <FooterWrapper>
            <div className="title">Debuxing</div>
            <div className="links">
                <AniLink fade to="/privacy-policy">Privacy Policy</AniLink>
            </div>
            {/* <div className="icons">
            {
                icons.map(icon => {
                    return (
                        <a href={icon.path} key={icon.id} target="_blank" rel="noopener noreferrer">
                            {icon.icon}
                        </a>
                    )
                })
            }
            </div> */}
            <p className="copyright">copyright &copy; {new Date().getFullYear()}</p>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
    padding: 2rem 0;
    background: ${styles.colors.mainBlack};

    .title {
        text-align: center;
        width: 10rem;
        color: ${styles.colors.mainWhite};
        text-transform: uppercase;
        padding: 0.3rem 1rem;
        margin: 0 auto 2rem auto;
        font-size: 1.5rem;
        ${styles.border({color:`${styles.colors.mainBlue}`})};
    }

    .links {
        display: block;
        text-align: center;

        a {
            color: ${styles.colors.mainWhite};
            margin-left: 1rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .icons {
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
    }
    
    .icon {
        color: ${styles.colors.mainWhite};
        font-size: 1.3rem;
        ${styles.transition({})};

        &:hover {
            color: ${styles.colors.mainYellow};
        }
    }
    
    .copyright {
        color: ${styles.colors.mainWhite};
        text-transform: capitalize;
        text-align: center;
        margin: 1rem 0;
    }
`


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

export default Footer
