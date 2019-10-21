import React from 'react'
import PropTypes from 'prop-types'

export const Columns = props => {

  const {
    children,
    className
  } = props

  return (
    <div className={`columns ${className}`}>
      {children}
    </div>
  )
}

Columns.defaultProps = {
  className: ''
}

Columns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Columns