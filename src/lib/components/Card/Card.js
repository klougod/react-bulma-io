import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { CardHeader, CardImage, CardContent, CardFooter } from './'

const cardHeaderType = (<CardHeader />).type
const cardImageType = (<CardImage />).type
const cardContentType = (<CardContent />).type
const cardFooterType = (<CardFooter />).type

export const Card = ({ className, children }) => (
  <div className={`card ${className}`}>
    { Children.toArray(children).filter(c => c.type === cardHeaderType) }
    { Children.toArray(children).filter(c => c.type === cardImageType) }
    { Children.toArray(children).filter(c => c.type === cardContentType) }
    { Children.toArray(children).filter(c => c.type === cardFooterType) }
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