import React from 'react'
import styled from 'styled-components'
import {styles} from '../../utils'
import {FaArrowDown} from 'react-icons/fa'

const LeaveComment = () => {
    return (
        <LeaveCommentWrapper>
            Doubts? Feel free to leave a comment! <br />
            <FaArrowDown className="arrow_icon"/>
        </LeaveCommentWrapper>
    )
}

const LeaveCommentWrapper = styled.div`

    font-size: 1.2rem;
    font-weight: 700;
    margin-top: 2rem;
    text-align: center;

    .arrow_icon {
        color: ${styles.colors.mainBlue};
        font-size: 1.75rem;
    }

    @media(min-width:${styles.size.tablet}) {
        font-size: 1.6rem;
        padding: 1.3rem;

        .arrow_icon {
            font-size: 2.5rem;
        }
    }
`

export default LeaveComment
