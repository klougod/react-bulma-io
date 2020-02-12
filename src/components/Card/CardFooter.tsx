import React from 'react'
import PropTypes from 'prop-types'

export const CardFooter = ({ className, children }: any) => (
  <header className={`card-footer ${className}`}>{children}</header>
)

CardFooter.defaultProps = {
  className: ''
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default CardFooter
