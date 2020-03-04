import React, { Children, ReactElement, ReactNode } from 'react'

interface NavbarStartProps {
  className?: string
  children?: ReactNode
}

export const NavbarStart = ({ className, children }: NavbarStartProps) => (
  <div className={`navbar-start ${className}`}>
    {Children.toArray(children).map((item: ReactElement, index) =>
      React.cloneElement(item, {
        key: index,
        className: `${item.props.className} navbar-item`
      })
    )}
  </div>
)

NavbarStart.defaultProps = {
  className: ''
}

export default NavbarStart
