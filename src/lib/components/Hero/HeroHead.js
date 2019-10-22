import React from 'react'
import PropTypes from 'prop-types'

export const HeroHead = ({ className, children }) => (
  <div className={`hero-head ${className}`}>
    { children }
  </div>
)

HeroHead.defaultProps = {
  className: ''
}

HeroHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default HeroHead