import React, { Children, ReactElement, ReactNode } from 'react'

interface NavbarEndProps {
  className?: string
  children?: ReactNode
}

export const NavbarEnd = ({ className, children }: NavbarEndProps) => (
  <div className={`navbar-end ${className}`}>
    {Children.toArray(children).map((item: ReactElement, index) =>
      React.cloneElement(item, {
        key: index,
        className: `${item.props.className} navbar-item`
      })
    )}
  </div>
)

NavbarEnd.defaultProps = {
  className: ''
}

export default NavbarEnd
