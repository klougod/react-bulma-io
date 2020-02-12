import React from 'react'
import PropTypes from 'prop-types'

export const HeroHead = ({ className, children }: any) => (
  <div className={`hero-head ${className}`}>{children}</div>
)

HeroHead.defaultProps = {
  className: ''
}

HeroHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default HeroHead
