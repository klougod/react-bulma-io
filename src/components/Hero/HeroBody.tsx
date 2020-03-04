import React, { ReactNode } from 'react'

interface HeroBodyProps {
  className?: string
  children?: ReactNode
}

export const HeroBody = ({ className, children }: HeroBodyProps) => (
  <div className={`hero-body ${className}`}>{children}</div>
)

HeroBody.defaultProps = {
  className: ''
}

export default HeroBody
