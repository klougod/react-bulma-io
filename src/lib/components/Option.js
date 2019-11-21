import React from 'react'
import PropTypes from 'prop-types'

export const Option = ({ value, text, className }) => (
  <option className={className} value={value}>
    {text}
  </option>
)

Option.defaultProps = {
  text: '',
  value: '',
  className: ''
}

Option.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string
}

export default Option