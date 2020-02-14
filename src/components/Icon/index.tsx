import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon }: any) => (
  <span className='icon is-small is-left'>
    <FontAwesomeIcon icon={icon} />
  </span>
)

Icon.defaultProps = {
  icon: null
}

Icon.propTypes = {
  icon: PropTypes.any
}

export default Icon
