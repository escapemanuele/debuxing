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
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
