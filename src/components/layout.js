import React from "react"
import PropTypes from "prop-types"
//import "./layout.css"
import {createGlobalStyle} from 'styled-components'
import Navbar from "../components/Globals/Navbar/Navbar";
import Footer from "./Globals/Footer";

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
    color: #262626;
    background: #fff;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
