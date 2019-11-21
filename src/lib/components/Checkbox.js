import React from 'react'
import PropTypes from 'prop-types'

export const Checkbox = ({ text, checked, name, className, onChange }) => (
  <label className="checkbox">
    <input type="checkbox" className={className} checked={checked} onChange={onChange} name={name} />
    &nbsp;{ text }
  </label>
)

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
  name: '',
  text: '',
  className: ''
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
}

export default Checkbox;