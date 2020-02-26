import React, { ReactNode } from 'react'

interface TagProps {
  color?: string
  className?: string
  text?: ReactNode
}

export const Tag = ({ color, className, text }: TagProps) => (
  <span className={`tag ${color} ${className}`}>{text}</span>
)

Tag.defaultProps = {
  color: '',
  className: '',
  text: ''
}

export default Tag
