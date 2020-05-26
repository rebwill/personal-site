/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div style={{ minHeight: `100%`, position: `relative` }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          maxWidth: 960,
          padding: `1.45rem 1.0875rem 3rem 1.0875rem`,
        }}
      >
        <main
          style={{
            margin: `145px auto 0 auto`,
            maxWidth: `42rem`,
            padding: `1.5rem 1.125rem`,
          }}
        >
          {children}
        </main>
      </div>
      <footer
        style={{
          margin: `2rem 0 0 0`,
          position: `fixed`,
          bottom: `0`,
          backgroundColor: `white`,
          padding: `2rem 1rem .25rem 1rem`,
          boxShadow: `1px 2px 18px rgba(0,0,0,.1)`,
          width: `100vw`,
          // position: `absolute`,
        }}
      >
        <h5>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </h5>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
