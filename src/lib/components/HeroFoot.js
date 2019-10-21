import React from 'react'
import PropTypes from 'prop-types'

export const HeroFoot = props => {

  const {
    className,
    children
  } = props

  return (
    <div className={`hero-foot ${className}`}>
      { children }
    </div>
  )
}

HeroFoot.defaultProps = {
  className: ''
}

HeroFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default HeroFoot