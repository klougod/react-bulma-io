import React from 'react'
import PropTypes from 'prop-types'

export const Checkbox = ({ text, checked, name, className, wrapperClass, onChange }) => (
  <div className={`checkbox ${wrapperClass}`}>
    <input type="checkbox" className={className} checked={checked} onChange={onChange} name={name} />
    <label>&nbsp;{ text }</label>
  </div>
)

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
  name: '',
  text: '',
  className: '',
  wrapperClass: ''
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
  wrapperClass: PropTypes.string
}

export default Checkbox;