import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      boxShadow: `1px 2px 18px rgba(0,0,0,.1)`,
      width: `100vw`,
      position: `fixed`,
    }}
  >
    <div
      style={{
        maxWidth: 960,
        padding: `1.45rem 1.45rem 3rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#558290`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul
        style={{
          listStyle: `none`,
          float: `left`,
          color: `white`,
          // fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          fontFamily: `"Roboto", sans-serif`,
          fontWeight: `700`,
          marginLeft: `0`,
          marginTop: `0.5rem`,
        }}
        className="header-nav-link"
      >
        <ListLink id="header-nav-link" to="/">
          HOME
        </ListLink>
        <ListLink id="header-nav-link" to="/about/">
          ABOUT
        </ListLink>
        <ListLink id="header-nav-link" to="/blog/">
          BLOG
        </ListLink>
        <ListLink id="header-nav-link" to="/contact/">
          CONTACT
        </ListLink>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
