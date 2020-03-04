import React, { ReactNode } from 'react'

interface ColumnsProps {
  className?: string
  children?: ReactNode
}

export const Columns = ({ className, children }: ColumnsProps) => (
  <div className={`columns ${className}`}>{children}</div>
)

Columns.defaultProps = {
  className: ''
}

export default Columns
