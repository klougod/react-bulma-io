import React from 'react'
import PropTypes from 'prop-types'

export const HeroFoot = ({ className, children }: any) => (
  <div className={`hero-foot ${className}`}>{children}</div>
)

HeroFoot.defaultProps = {
  className: ''
}

HeroFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default HeroFoot
