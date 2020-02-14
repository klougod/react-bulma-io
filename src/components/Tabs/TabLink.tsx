import React from 'react'
import PropTypes from 'prop-types'

export const TabLink = ({ isActive, text, id, changeTab }: any) => {
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

TabLink.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  text: PropTypes.string,
  isActive: PropTypes.bool,
  changeTab: PropTypes.func,
  children: PropTypes.node
}

export default TabLink
