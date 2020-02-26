import React, { ReactNode } from 'react'

interface CardFooterProps {
  className?: string,
  children?: ReactNode
}

export const CardFooter = ({ className, children }: CardFooterProps) => (
  <header className={`card-footer ${className}`}>{children}</header>
)

CardFooter.defaultProps = {
  className: ''
}

export default CardFooter
