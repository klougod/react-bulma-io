import React, { ReactNode } from 'react'

interface ContainerProps {
  className?: string
  children?: ReactNode
}

export const Container = ({ className, children }: ContainerProps) => (
  <div className={`container ${className}`}>{children}</div>
)

Container.defaultProps = {
  className: ''
}

export default Container
