import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ title }) => (
  <header data-testid="header" className="Header">
    <h1>Header: {title}</h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
