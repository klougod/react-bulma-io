import React from 'react'
import PropTypes from 'prop-types'

export const NavbarBrand = props => {

  const {
    className,
    children
  } = props

  const handleBurgerClick = e => {
    if (e.target.classList.contains("is-active")) {
      e.target.classList.remove("is-active");
      menuRef.current.classList.remove("is-active");
    } else {
      e.target.classList.add("is-active");
      menuRef.current.classList.add("is-active");
    }
  }


  const navBurger = () => (
    <button onClick={handleBurgerClick} className="navbar-burger" aria-label="abrir menu" aria-expanded="false">
        <span aria-hidden="true" className="has-no-pointer-events" />
        <span aria-hidden="true" className="has-no-pointer-events" />
        <span aria-hidden="true" className="has-no-pointer-events" />
      </button>
  )

  return (
    <div className={`navbar-brand ${className}`}>
      { children.map((item, index) => {
        return React.cloneElement(item, {
          key: index,
          className: `${item.props.className} navbar-item`
        })
      })}
      
    </div>
  )
}

NavbarBrand.defaultProps = {
  className: ''
}

NavbarBrand.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default NavbarBrand