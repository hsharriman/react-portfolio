/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import "./projectpgs.css"
// import Header from "./header"
// import "./layout.css"

// const loading = require('../gifs/cursors/loading.gif');

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div
      >
        <main>
          {/* <div id="loader">
            <div class="loading-section">
                <img class="gif" src={loading} alt="" />
                <div class="txt">loading</div>
            </div>
          </div> */}
          {children}
          </main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
