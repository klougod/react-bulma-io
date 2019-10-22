import React, { Children } from 'react'
import PropTypes from 'prop-types'

export const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    { Children.toArray(children).filter(c => c.type.name === "CardHeader") }
    { Children.toArray(children).filter(c => c.type.name === "CardImage") }
    { Children.toArray(children).filter(c => c.type.name === "CardContent") }
    { Children.toArray(children).filter(c => c.type.name === "CardFooter") }
  </div>
)

Card.defaultProps = {
  className: ''
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Card