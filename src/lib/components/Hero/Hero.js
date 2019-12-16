import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { HeroHead, HeroBody, HeroFoot } from './'

const heroHeadType = (<HeroHead />).type
const heroBodyType = (<HeroBody />).type
const heroFootType = (<HeroFoot />).type

export const Hero = ({ className, children }) => (
  <section className={`hero ${className}`}>
    { Children.toArray(children).filter(c => c.type === heroHeadType) }
    { Children.toArray(children).filter(c => c.type === heroBodyType) }
    { Children.toArray(children).filter(c => c.type === heroFootType) }
  </section>
)

Hero.defaultProps = {
  className: ''
}

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Hero