import React from "react"
import PropTypes from "prop-types"
//import "./layout.css"
import {createGlobalStyle} from 'styled-components'
import Navbar from "../components/Globals/Navbar/Navbar";
import Footer from "./Globals/Footer";
import {styles} from '../utils'

const Layout = ({children}) => {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
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
  }

  a {
    text-decoration: none;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
