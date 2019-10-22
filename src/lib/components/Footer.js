import React from 'react'
import PropTypes from 'prop-types'

export const Footer = ({ className, children }) => (
  <footer className={`footer ${className}`}>
    { children }
  </footer>
)

Footer.defaultProps = {
  className: ''
}

Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Footer