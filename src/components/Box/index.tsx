import React, { ReactNode } from 'react'

interface BoxProps {
  className?: string
  children?: ReactNode
}

export const Box = ({ className, children }: BoxProps) => (
  <div className={`box ${className}`}>{children}</div>
)

Box.defaultProps = {
  className: ''
}

export default Box
