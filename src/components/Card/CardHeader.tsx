import React, { ReactNode } from 'react'

interface CardHeaderProps {
  className?: string
  children?: ReactNode
}

export const CardHeader = ({ className, children }: CardHeaderProps) => (
  <header className={`card-header ${className}`}>{children}</header>
)

CardHeader.defaultProps = {
  className: ''
}

export default CardHeader
