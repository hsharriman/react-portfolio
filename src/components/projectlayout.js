/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "../styles/index.css"
import '../styles/projectpgs.css'

// const loading = require('../gifs/cursors/loading.gif');

const ProjectLayout = ({ children }) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}

ProjectLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectLayout

