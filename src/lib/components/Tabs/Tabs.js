import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import TabLink from './TabLink'


export const Tabs = ({ children, className }) => {

  const [arrayChildren, setChildren] = useState(React.Children.toArray(children))

  const changeTab = e => {
    const key = e.target.id
    setChildren(arrayChildren.map((child) => (
      React.cloneElement(child, { ...child.props, isActive: child.key === key })
    )))
  }

  return (
    <Fragment>
      <div className={`tabs ${className}`}>
        <ul>
          {
            arrayChildren.map((child, i) => (
              <TabLink id={`tab-link-${i}`} isActive={child.props.isActive} changeTab={changeTab}
                key={i} text={child.props.tabName} />
            ))
          }
        </ul>
      </div>
      <div style={{ 'borderRadius': '0px', 'marginLeft': '1px', 'width': 'calc(100% - 2px) !important' }}
        className="column is-12 box" >
        {arrayChildren.filter(c => c.props.isActive)}
      </div>
    </Fragment>
  );
}

Tabs.defaultProps = {
  className: ''
}

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Tabs