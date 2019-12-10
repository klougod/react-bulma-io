import React from 'react'
import PropTypes from 'prop-types'

export const Option = ({ value, text, className, disabled }) => (
  <option className={className} value={value} disabled={disabled}>
    {text}
  </option>
)

Option.defaultProps = {
  text: '',
  value: '',
  className: '',
  disabled: false
}

Option.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool
}

export default Option