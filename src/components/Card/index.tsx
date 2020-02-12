import React, { Children, ReactElement } from 'react'
import PropTypes from 'prop-types'

import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

const cardHeaderType = (<CardHeader />).type
const cardImageType = (<CardImage />).type
const cardContentType = (<CardContent />).type
const cardFooterType = (<CardFooter />).type

export const Card = ({ className, children }: any) => (
  <div className={`card ${className}`}>
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === cardHeaderType
    )}
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === cardImageType
    )}
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === cardContentType
    )}
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === cardFooterType
    )}
  </div>
)

Card.defaultProps = {
  className: ''
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export { CardHeader, CardImage, CardContent, CardFooter }
export default Card
