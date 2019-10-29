import React from 'react'
import PropTypes from 'prop-types'

export const Button = ({ className, text, isLoading, onClick }) => (
  <button onClick={onClick} className={`button ${className} ${isLoading && 'is-loading'}`}>
    {text}
  </button>
)

Button.defaultProps = {
  isLoading: false,
  onClick: null,
  text: '',
  className: ''
}

Button.propTypes = {
  isLoading: PropTypes.bool,
  onChange: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string
}

export default Button