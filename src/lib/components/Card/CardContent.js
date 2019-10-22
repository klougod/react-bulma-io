import React from 'react'
import PropTypes from 'prop-types'

export const CardContent = ({ className, children }) => (
  <header className={`card-content ${className}`}>
    { children }
  </header>
)

CardContent.defaultProps = {
  className: ''
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default CardContent