import React from 'react'
import PropTypes from 'prop-types'

export const Tag = props => {

  const {
    color,
    className,
    text
  } = props

  return (
    <span className={`tag ${color} ${className}`}>{text}</span>
  )
}

Tag.defaultProps = {
  color: '',
  className: '',
  text: ''
}

Tag.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
}

export default Tag