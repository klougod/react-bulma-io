import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Icon = ({ icon }: { icon: any }) => (
  <span className='icon is-small is-left'>
    <FontAwesomeIcon icon={icon} />
  </span>
)

Icon.defaultProps = {
  icon: null
}

export default Icon
