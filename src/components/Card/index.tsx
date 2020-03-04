import React, { Children, ReactElement, ReactNode } from 'react'

import CardHeader from './CardHeader'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardFooter from './CardFooter'

const cardHeaderType = (<CardHeader />).type
const cardImageType = (<CardImage />).type
const cardContentType = (<CardContent />).type
const cardFooterType = (<CardFooter />).type

interface CardProps {
  className?: string
  children?: ReactNode
}

export const Card = ({ className, children }: CardProps) => (
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

export { CardHeader, CardImage, CardContent, CardFooter }
export default Card
