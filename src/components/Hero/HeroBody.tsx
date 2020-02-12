import React from 'react'
import PropTypes from 'prop-types'

export const HeroBody = ({ className, children }: any) => (
  <div className={`hero-body ${className}`}>{children}</div>
)

HeroBody.defaultProps = {
  className: ''
}

HeroBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default HeroBody
