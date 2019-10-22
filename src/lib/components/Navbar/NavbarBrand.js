import React, { Children } from 'react'
import PropTypes from 'prop-types'

export const NavbarBrand = ({ className, menuRef, children }) => {
  const handleBurgerClick = e => {
    if (e.target.classList.contains("is-active")) {
      e.target.classList.remove("is-active");
      menuRef.current.classList.remove("is-active");
    } else {
      e.target.classList.add("is-active");
      menuRef.current.classList.add("is-active");
    }
  }

  const burgerStyle = {
    backgroundColor: 'transparent',
    border: 0
  }

  const noPointerEvents = {
    pointerEvents: 'none'
  }

  const NavBurger = () => (
    <button onClick={handleBurgerClick} className="navbar-burger" style={burgerStyle} aria-label="abrir menu" aria-expanded="false">
      <span aria-hidden="true" style={noPointerEvents} />
      <span aria-hidden="true" style={noPointerEvents} />
      <span aria-hidden="true" style={noPointerEvents} />
    </button>
  )

  return (
    <div className={`navbar-brand ${className}`}>
      {Children.toArray(children).map((item, index) => {
        return React.cloneElement(item, {
          key: index,
          className: `${item.props.className} navbar-item`
        })
      })}
      <NavBurger />
    </div>
  )
}

NavbarBrand.defaultProps = {
  className: '',
  menuRef: null
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  menuRef: PropTypes.any,
  children: PropTypes.node.isRequired
}

export default NavbarBrand