import React, { ReactNode } from 'react'

interface FooterProps {
  className?: string
  children?: ReactNode
}

export const Footer = ({ className, children }: FooterProps) => (
  <footer className={`footer ${className}`}>{children}</footer>
)

Footer.defaultProps = {
  className: ''
}

export default Footer
