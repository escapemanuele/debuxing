import React from "react"
import PropTypes from "prop-types"
import {createGlobalStyle} from 'styled-components'
import Navbar from "../components/Globals/Navbar/Navbar";
import {styles} from '../utils'

const Layout = ({children}) => {

  return (
    <React.Fragment>
      <GlobalStyle />
      <Navbar />
      {children}
    </React.Fragment>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans', sans-serif;
    color: #fff;
    background: ${styles.colors.mainBlack};
    line-height: 1.55;
    word-wrap: break-word;
  }

  a {
    text-decoration: none;
  }

  h2 {
    margin-top: 20px;
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 2.3rem;
  }

  form-control, .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
