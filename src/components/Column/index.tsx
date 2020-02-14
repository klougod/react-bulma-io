import React from 'react'
import PropTypes from 'prop-types'

export const Column = ({
  size,
  tablet,
  mobile,
  desktop,
  children,
  className
}: any) => {
  let renderSize = size ? `is-${size}` : ''
  renderSize = tablet ? `${renderSize} is-${tablet}-tablet` : renderSize
  renderSize = mobile ? `${renderSize} is-${mobile}-mobile` : renderSize
  renderSize = desktop ? `${renderSize} is-${desktop}-desktop` : renderSize

  return <div className={`column ${renderSize} ${className}`}>{children}</div>
}

Column.defaultProps = {
  size: null,
  tablet: null,
  mobile: null,
  desktop: null,
  className: ''
}

Column.propTypes = {
  tablet: PropTypes.number,
  mobile: PropTypes.number,
  desktop: PropTypes.number,
  size: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Column
