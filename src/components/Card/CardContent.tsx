import React, { ReactNode } from 'react'

interface CardContentProps {
  className?: string,
  children?: ReactNode
}

export const CardContent = ({ className, children }: CardContentProps) => (
  <header className={`card-content ${className}`}>{children}</header>
)

CardContent.defaultProps = {
  className: ''
}

export default CardContent
