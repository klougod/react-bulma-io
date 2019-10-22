import React, { Children } from 'react'
import PropTypes from 'prop-types'

export const Hero = ({ className, children }) => (
  <section className={`hero ${className}`}>
    { Children.toArray(children).filter(c => c.type.name === "HeroHead") }
    { Children.toArray(children).filter(c => c.type.name === "HeroBody") }
    { Children.toArray(children).filter(c => c.type.name === "HeroFoot") }
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