import styled from 'styled-components'
import React from 'react'
import {styles} from './'

export const Section = styled.section`
    padding: 2rem 0;
    width: 90vw;
    margin: 0 auto;
`



export const SectionSidebar = ({children}) => {
    return (
        <SidebarWrapper>
            {children}
        </SidebarWrapper>
    )
}
const SidebarWrapper = styled.section`
    display: grid;
    margin: 0 auto;
    padding: 0.5rem;

    aside {
        display: none;
    }
    
    @media(min-width:${styles.size.tablet}) {
        padding: 2rem;
        
        grid-column-gap: 1.2rem;
        grid-template-areas:
        'content side';

        grid-template-columns: 1fr 200px;
        .item-content {
            grid-area: content;
        }

        aside {
            grid-area: side;
            margin-right: 0.5rem;
            display: block;
        }
    }
`
