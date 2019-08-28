import React from 'react'
import styled from 'styled-components'
import {styles} from './'

const BannerButton = styled.button`
    display: block;
    color: ${styles.colors.mainWhite};
    background: transparent;
    padding: 0.5rem 1rem;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing:0.5rem;
    ${styles.border({color: `${styles.colors.mainWhite}`})};
    ${styles.transition({})};
    margin-top: 2rem;
    margin-bottom:2rem;
    margin: ${props => (props.center)? '2rem auto' : ''};

    &:hover {
        background: ${styles.colors.mainWhite};
        color: ${styles.colors.mainBlack};
        cursor: pointer;
    }
`

const SectionButton = styled(BannerButton)`
    color: ${styles.colors.mainBlack};
    ${styles.border({color:`${styles.colors.mainBlack}`})};

    &:hover {
        background: ${styles.colors.mainBlack};
        color: ${styles.colors.mainYellow};
    }
`

export {BannerButton, SectionButton}
