import React, { Children, ReactElement, ReactNode } from 'react'

import HeroHead from './HeroHead'
import HeroBody from './HeroBody'
import HeroFoot from './HeroFoot'

const heroHeadType = (<HeroHead />).type
const heroBodyType = (<HeroBody />).type
const heroFootType = (<HeroFoot />).type

interface HeroProps {
  className?: string
  children?: ReactNode
}

export const Hero = ({ className, children }: HeroProps) => (
  <section className={`hero ${className}`}>
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === heroHeadType
    )}
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === heroBodyType
    )}
    {Children.toArray(children).filter(
      (c: ReactElement) => c.type === heroFootType
    )}
  </section>
)

Hero.defaultProps = {
  className: ''
}

export default Hero
