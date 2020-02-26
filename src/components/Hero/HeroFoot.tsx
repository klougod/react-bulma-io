import React, { ReactNode } from 'react'

interface HeroFootProps {
  className?: string
  children?: ReactNode
}
export const HeroFoot = ({ className, children }: HeroFootProps) => (
  <div className={`hero-foot ${className}`}>{children}</div>
)

HeroFoot.defaultProps = {
  className: ''
}

export default HeroFoot
