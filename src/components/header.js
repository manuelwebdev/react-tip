import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
        <Link 
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
          marginLeft: 200,
          fontSize: 16
        }}
        >Home</Link>
        <Link 
        to="/page-2"
        style={{
          color: 'white',
          textDecoration: 'none',
          paddingLeft: 50,
          fontSize: 16
        }}
        >About Us</Link>
      </h1>
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
