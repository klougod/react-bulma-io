import React from 'react'
import PropTypes from 'prop-types'

export const Container = props => {

  const {
    children,
    className
  } = props

  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  )
}

Container.defaultProps = {
  className: ''
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Container