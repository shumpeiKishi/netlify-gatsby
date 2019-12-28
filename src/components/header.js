import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const MenuItem = props => (
  <li style={{
    display: `inline-flex`,
    alignItems: `center`,
    marginBottom: `0`,
    marginRight: `3em`
  }}>
    <Link to={props.to} style={{ color: `white`, textDecoration: `none` }}>{props.menuItemName}</Link>
  </li>
)

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `royalblue`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        display: `flex`,
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
      </h1>
      <ul className="menu" style={{ display: `flex`, marginBottom: `0`, listStyleType: `none` }}>
        <MenuItem to="/archive" menuItemName="過去の記事" />
        <MenuItem to="/speaking" menuItemName="講演" />
        <MenuItem to="/about" menuItemName="このサイトについて" />
      </ul>
    </div>
  </header >
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
