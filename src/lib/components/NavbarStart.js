import React from 'react'
import PropTypes from 'prop-types'

export const NavbarStart = props => {

  const {
    className,
    children
  } = props

  return (
    <div className={`navbar-start ${className}`}>
      { children.map((item, index) => {
        return React.cloneElement(item, {
          key: index,
          className: `${item.props.className} navbar-item`
        })
      })}
    </div>
  )
}

NavbarStart.defaultProps = {
  className: ''
}

NavbarStart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default NavbarStart