import React from 'react'
import PropTypes from 'prop-types'

export const Hero = ({ className, children }) => (
  <section className={`hero ${className}`}>
    {children}
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