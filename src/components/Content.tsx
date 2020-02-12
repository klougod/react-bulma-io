import React from 'react'
import PropTypes from 'prop-types'

export const Content = ({ className, children }: any) => (
  <div className={`content ${className}`}>{children}</div>
)

Content.defaultProps = {
  className: ''
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Content
