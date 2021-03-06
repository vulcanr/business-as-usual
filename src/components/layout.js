/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {Fragment} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Helmet from "react-helmet"
import Container from "./global-styles/container"
import Search from "./search"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      siteSearchIndex {
        index
      }
    }
  `)

  return (
    <Fragment>

      <Helmet>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>
        
        <Container>
          <Search searchIndex={data.siteSearchIndex.index} />
        </Container>
        
        {children}
        
      </main>
        
      <Footer />
    
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
