import React from 'react'
import PropTypes from 'prop-types'

export const Column = props => {

  const {
    size,
    children,
    className
  } = props

  return (
    <div className={`column is-${size} ${className}`}>
      {children}
    </div>
  )
}

Column.defaultProps = {
  size: 12,
  className: ''
}

Column.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Column