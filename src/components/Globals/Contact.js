import React from 'react'
import {styles, Title, Section} from '../../utils'
import styled from 'styled-components'

const Contact = () => {
    return (
            <Section className="contact">
                <ContactWrapper>

                <Title title="contact" subtitle="us" />
                <div className="center">
                    <form   
                        action="https://formspree.io/escapemanuele@gmail.com" 
                        method="POST"
                        className={styles.form}>
                        <div>
                            <label htmlFor="name">name</label>
                            <input 
                                type="text" 
                                name="name"
                                id="name"
                                className="form-control"
                                placeholder="John Smith" />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input  
                                type="email"
                                name="email"
                                id="email"
                                className="form-control"
                                placeholder="email@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="10"
                                className="form-control"
                                placeholder="Hello there"/>
                        </div>
                        <div>
                            <input
                                type="submit"
                                value="Submit here"
                                className="submit" />
                        </div>
                    </form>
                </div>
                </ContactWrapper>
            </Section>
    )
}

const ContactWrapper = styled.section`

    width: 80vw;
    margin: 0 auto;

    @media(min-width: 992px) {
        .center {
            width: 50vw;
            margin: 0 auto;
        }
    }

    label {
        text-transform: capitalize;
        display: block;
        margin-bottom: 0.5rem;
    }

    .form-control,
    .submit {
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1rem;
        padding: 0.375rem 0.75rem;
        border: 1px solid ${styles.colors.darkGrey};
        border-radius: 0.25rem;
    }

    .submit {
        background-color: ${styles.colors.mainBlack};
        border-color: ${styles.colors.mainBlue};
        font-size:1.2rem;
        text-transform: uppercase;
        color: ${styles.colors.mainWhite};
        ${styles.transDefault};
        cursor: pointer;
    }
    .submit:hover {
        background: ${styles.colors.mainBlue};
        color: ${styles.colors.mainWhite};
        font-size:1.5rem;
        border-color: ${styles.colors.darkGrey};
    }
`

export default Contact
