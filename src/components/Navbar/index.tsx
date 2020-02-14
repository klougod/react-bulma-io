import React, { useRef, Children, ReactElement } from 'react'
import PropTypes from 'prop-types'
import NavbarStart from './NavbarStart'
import NavbarEnd from './NavbarEnd'
import NavbarBrand from './NavbarBrand'

const navbarBrandType = (<NavbarBrand />).type
const navbarStartType = (<NavbarStart />).type
const navbarEndType = (<NavbarEnd />).type

const Navbar = ({ className, menuClass, children }: any) => {
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

Navbar.propTypes = {
  className: PropTypes.string,
  menuClass: PropTypes.string,
  children: PropTypes.node
}

export { Navbar, NavbarBrand, NavbarEnd, NavbarStart }
export default Navbar
