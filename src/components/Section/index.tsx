import React, { ReactNode } from 'react'

interface SectionProps {
  className?: string
  children?: ReactNode
}
export const Section = ({ className, children }: SectionProps) => (
  <section className={`section ${className}`}>{children}</section>
)

Section.defaultProps = {
  className: ''
}

export default Section
