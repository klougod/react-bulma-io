import React, { useRef, Children } from 'react'
import PropTypes from 'prop-types'

export const Navbar = ({ className, menuClass, children }) => {
  const menuRef = useRef(null)
  const childrenArray = Children.toArray(children)

  return (
    <nav className={`navbar ${className}`} role="navigation" aria-label="main navigation">
      {
        childrenArray.map(c => c.type.name === "NavbarBrand" && React.cloneElement(c, { menuRef }))
      }
      <div ref={menuRef} className={`navbar-menu ${menuClass}`}>
        { childrenArray.filter(c => c.type.name === "NavbarStart") }
        { childrenArray.filter(c => c.type.name === "NavbarEnd") }
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
  children: PropTypes.node.isRequired
}

export default Navbar