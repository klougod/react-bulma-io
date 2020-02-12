import React, { Children, ReactElement } from 'react'
import PropTypes from 'prop-types'

export const NavbarEnd = ({ className, children }: any) => (
  <div className={`navbar-end ${className}`}>
    {Children.toArray(children).map((item: ReactElement, index) =>
      React.cloneElement(item, {
        key: index,
        className: `${item.props.className} navbar-item`
      })
    )}
  </div>
)

NavbarEnd.defaultProps = {
  className: ''
}

NavbarEnd.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default NavbarEnd
