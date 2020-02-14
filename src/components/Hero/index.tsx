import React, { Children, ReactElement } from 'react'
import PropTypes from 'prop-types'

import HeroHead from './HeroHead'
import HeroBody from './HeroBody'
import HeroFoot from './HeroFoot'

const heroHeadType = (<HeroHead />).type
const heroBodyType = (<HeroBody />).type
const heroFootType = (<HeroFoot />).type

export const Hero = ({ className, children }: any) => (
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

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Hero
