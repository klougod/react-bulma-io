import React, { Children } from 'react'
import PropTypes from 'prop-types'

export const NavbarStart = ({ className, children }) => (
  <div className={`navbar-start ${className}`}>
    {
      Children.toArray(children).map((item, index) => (
        React.cloneElement(item, {
          key: index,
          className: `${item.props.className} navbar-item`
        })
      ))
    }
  </div>
)

NavbarStart.defaultProps = {
  className: ''
}

NavbarStart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default NavbarStart