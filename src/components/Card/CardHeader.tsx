import React from 'react'
import PropTypes from 'prop-types'

export const CardHeader = ({ className, children }: any) => (
  <header className={`card-header ${className}`}>{children}</header>
)

CardHeader.defaultProps = {
  className: ''
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CardHeader
