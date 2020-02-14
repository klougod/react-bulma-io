import React, { Fragment, useState, ReactElement, MouseEvent } from 'react'
import PropTypes from 'prop-types'

import TabLink from './TabLink'

const Tabs = ({ children, className }: any) => {
  const [arrayChildren, setChildren] = useState(
    React.Children.toArray(children)
  )

  const changeTab = (e: MouseEvent<HTMLButtonElement>) => {
    const key = (e.target as HTMLButtonElement).id
    setChildren(
      arrayChildren.map((child: ReactElement) =>
        React.cloneElement(child, {
          ...child.props,
          isActive: child.key === key
        })
      )
    )
  }

  return (
    <Fragment>
      <div className={`tabs ${className}`}>
        <ul>
          {arrayChildren.map((child: ReactElement, i) => (
            <TabLink
              id={`.${i}`}
              isActive={child.props.isActive}
              changeTab={changeTab}
              key={i}
              text={child.props.tabName}
            />
          ))}
        </ul>
      </div>
      <div
        style={{
          borderRadius: '0px',
          marginLeft: '1px',
          width: 'calc(100% - 2px)'
        }}
        className='column is-12 box'
      >
        {arrayChildren.filter((c: ReactElement) => c.props.isActive)}
      </div>
    </Fragment>
  )
}

Tabs.defaultProps = {
  className: ''
}

Tabs.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export { TabLink, Tabs }
export default Tabs
