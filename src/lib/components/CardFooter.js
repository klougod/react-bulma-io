import React from 'react'
import PropTypes from 'prop-types'

export const CardFooter = props => {

  const {
    className,
    children
  } = props

  return (
    <header className={`card-footer ${className}`}>
      { children }
    </header>
  )
}

CardFooter.defaultProps = {
  className: ''
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default CardFooter