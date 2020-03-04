import React, { useState, ReactElement, MouseEvent, ReactNode } from 'react'

import TabLink from './TabLink'

interface TabsProps {
  className?: string
  children?: ReactNode
}

const Tabs = ({ children, className }: TabsProps) => {
  const [arrayChildren, setChildren] = useState(
    React.Children.toArray(children)
  )

  const changeTab = (e: MouseEvent<HTMLAnchorElement>): void => {
    const key = (e.target as HTMLAnchorElement).id
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
    <>
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
    </>
  )
}

Tabs.defaultProps = {
  className: ''
}

export { TabLink, Tabs }
export default Tabs
