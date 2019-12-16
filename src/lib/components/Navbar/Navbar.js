import React, { useRef, Children } from 'react'
import PropTypes from 'prop-types'

export const Navbar = ({ className, menuClass, children }) => {
  const menuRef = useRef(null)
  const childrenArray = Children.toArray(children)

  return (
    <nav className={`navbar ${className}`} role="navigation" aria-label="main navigation">
      {
        React.cloneElement(childrenArray[0], { menuRef })
      }
      <div ref={menuRef} className={`navbar-menu ${menuClass}`}>
        {
          childrenArray.filter((c, i) => i !== 0)
        }
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