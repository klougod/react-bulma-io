import React, { Children, ReactElement } from 'react'
import PropTypes from 'prop-types'

export const NavbarStart = ({ className, children }: any) => (
  <div className={`navbar-start ${className}`}>
    {Children.toArray(children).map((item: ReactElement, index) =>
      React.cloneElement(item, {
        key: index,
        className: `${item.props.className} navbar-item`
      })
    )}
  </div>
)

NavbarStart.defaultProps = {
  className: ''
}

NavbarStart.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavbarStart
