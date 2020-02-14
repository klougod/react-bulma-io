import React from 'react'
import PropTypes from 'prop-types'

export const Container = ({ className, children }: any) => (
  <div className={`container ${className}`}>{children}</div>
)

Container.defaultProps = {
  className: ''
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Container
