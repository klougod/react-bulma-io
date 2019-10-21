import React, { useRef, Children } from 'react'
import PropTypes from 'prop-types'

export const Navbar = props => {

  const {
    className,
    menuClass,
    children
  } = props

  const menuRef = useRef(null)
  const childrenArray = Children.toArray(children)

  return (
    <nav className={`navbar ${className}`} role="navigation" aria-label="main navigation">
      { childrenArray.filter(c => c.type.name === "NavbarBrand") }
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