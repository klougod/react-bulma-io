import React from 'react'
import PropTypes from 'prop-types'

export const NavbarEnd = props => {

  const {
    className,
    children
  } = props

  return (
    <div className={`navbar-end ${className}`}>
      { children.map((item, index) => {
        return React.cloneElement(item, {
          key: index,
          className: `${item.props.className} navbar-item`
        })
      })}
    </div>
  )
}

NavbarEnd.defaultProps = {
  className: ''
}

NavbarEnd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default NavbarEnd