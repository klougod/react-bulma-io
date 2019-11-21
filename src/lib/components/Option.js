import React from 'react'
import PropTypes from 'prop-types'

export const Option = ({ value, text }) => (
  <option value={value}>
    {text}
  </option>
)

Option.defaultProps = {
  text: '',
  value: ''
}

Option.propTypes = {
  text: PropTypes.string,
  value: PropTypes.any
}

export default Option