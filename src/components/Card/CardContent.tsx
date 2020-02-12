import React from 'react'
import PropTypes from 'prop-types'

export const CardContent = ({ className, children }: any) => (
  <header className={`card-content ${className}`}>{children}</header>
)

CardContent.defaultProps = {
  className: ''
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CardContent
