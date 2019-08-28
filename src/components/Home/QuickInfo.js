import React from 'react'
import {Section, Title, SectionButton} from '../../utils'
import styled from 'styled-components'
import {Link} from 'gatsby'
import {styles} from '../../utils'

const QuickInfo = () => {
    return (
        <Section>
            <Title message="let us tell you" title="our mission" />
            <QuickInfoWrapper>
                <p className="text">
                    Eu dolor voluptate ipsum aliquip pariatur officia enim. Excepteur proident ipsum eu dolor ullamco sint ullamco. Laborum ea qui magna laboris non duis. Do velit sunt Lorem tempor pariatur est laborum culpa ea. Eu magna ad culpa consequat eu cillum aliqua magna dolor ex voluptate duis fugiat dolor.

Esse officia eu sint sit proident ad dolore enim voluptate ipsum ad. Est commodo voluptate id cillum commodo excepteur non aliqua. Et eu excepteur culpa aliqua cillum fugiat nostrud exercitation culpa proident ipsum.

Pariatur anim duis elit laborum consequat quis cupidatat cillum. Laboris ullamco ex sunt velit dolor anim enim ea aute Lorem qui proident reprehenderit dolor. Eu tempor fugiat laborum eu esse aliqua incididunt eu cillum. Non sint ipsum nostrud et sint nisi reprehenderit enim non magna labore. Quis sint deserunt elit do. Laboris enim proident ipsum nulla consequat. Veniam mollit esse ut dolor.
                </p>
                <Link to="/about/" style={{textDecoration: 'none'}}>
                    <SectionButton center>about</SectionButton>
                </Link>
            </QuickInfoWrapper>
        </Section>
    )
}

const QuickInfoWrapper = styled.div`
    width: 90%;
    margin: 2rem auto;

    .text {
        line-height: 2rem;
        color: ${styles.colors.mainGrey};
        word-spacing: 0.2rem;
        text-align: justify;
    }

    @media(min-width: 768px) {
        width: 70%;
    }

    
    @media(min-width: 992px) {
        width: 60%;
    }
`

export default QuickInfo
