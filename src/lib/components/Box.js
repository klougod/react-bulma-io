import React from 'react'
import PropTypes from 'prop-types'

export const Box = ({ className, children }) => (
  <div className={`box ${className}`}>
    { children }
  </div>
)

Box.defaultProps = {
  className: ''
}

Box.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Box