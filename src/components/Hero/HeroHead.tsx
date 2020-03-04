import React, { ReactNode } from 'react'

interface HeroHeadProps {
  className?: string
  children?: ReactNode
}
export const HeroHead = ({ className, children }: HeroHeadProps) => (
  <div className={`hero-head ${className}`}>{children}</div>
)

HeroHead.defaultProps = {
  className: ''
}

export default HeroHead
