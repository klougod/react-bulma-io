import React, { ReactNode } from 'react'

interface ContentProps {
  className?: string
  children?: ReactNode
}
export const Content = ({ className, children }: ContentProps) => (
  <div className={`content ${className}`}>{children}</div>
)

Content.defaultProps = {
  className: ''
}

export default Content
