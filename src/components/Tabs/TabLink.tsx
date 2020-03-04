import React, { ReactNode, MouseEvent } from 'react'

interface TabLinkProps {
  className?: string
  id?: string
  text?: ReactNode
  isActive?: boolean
  changeTab?: (e: MouseEvent<HTMLAnchorElement>) => void
  children?: ReactNode
}

export const TabLink = ({ isActive, text, id, changeTab }: TabLinkProps) => {
  return (
    <li className={isActive ? 'is-active' : ''}>
      {/* eslint-disable-next-line */}
      <a
        id={id}
        className='is-size-4-tablet is-size-6-mobile'
        style={{ padding: '0.5em 0.2em !important' }}
        onClick={changeTab}
      >
        {text}
      </a>
    </li>
  )
}

TabLink.defaultProps = {
  className: '',
  id: '',
  text: '',
  isActive: false,
  changeTab: () => {}
}

export default TabLink
