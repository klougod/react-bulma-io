import React from 'react'

interface ColumnProps {
  tablet?: number
  mobile?: number
  desktop?: number
  size?: number
  className?: string
  children?: string
}

export const Column = ({
  size,
  tablet,
  mobile,
  desktop,
  children,
  className
}: ColumnProps) => {
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

export default Column
