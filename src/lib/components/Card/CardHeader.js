import React from 'react'
import PropTypes from 'prop-types'

export const CardHeader = ({ className, children }) => (
  <header className={`card-header ${className}`}>
    { children }
  </header>
)

CardHeader.defaultProps = {
  className: ''
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default CardHeader