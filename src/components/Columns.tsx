import React from 'react'
import PropTypes from 'prop-types'

export const Columns = ({ className, children }: any) => (
  <div className={`columns ${className}`}>{children}</div>
)

Columns.defaultProps = {
  className: ''
}

Columns.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Columns
