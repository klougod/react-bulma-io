import React, { useRef, Children, ReactElement, ReactNode } from 'react'
import NavbarStart from './NavbarStart'
import NavbarEnd from './NavbarEnd'
import NavbarBrand from './NavbarBrand'

const navbarBrandType = (<NavbarBrand />).type
const navbarStartType = (<NavbarStart />).type
const navbarEndType = (<NavbarEnd />).type

interface NavbarProps {
  className?: string
  menuClass?: string
  children?: ReactNode
}

const Navbar = ({ className, menuClass, children }: NavbarProps) => {
  const menuRef = useRef(null)
  const childrenArray = Children.toArray(children)

  return (
    <nav
      className={`navbar ${className}`}
      role='navigation'
      aria-label='main navigation'
    >
      {childrenArray.map(
        (c: ReactElement) =>
          c.type === navbarBrandType && React.cloneElement(c, { menuRef })
      )}
      <div ref={menuRef} className={`navbar-menu ${menuClass}`}>
        {childrenArray.filter((c: ReactElement) => c.type === navbarStartType)}
        {childrenArray.filter((c: ReactElement) => c.type === navbarEndType)}
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  className: '',
  menuClass: ''
}

export { Navbar, NavbarBrand, NavbarEnd, NavbarStart }
export default Navbar
