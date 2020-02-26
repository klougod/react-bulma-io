import React from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface EyeIconProps {
  showPw: Boolean
  onClick: () => void
}

export const EyeIcon = ({ showPw, onClick }: EyeIconProps) => (
  <p className='control'>
    <button className='button' tabIndex={-1} onClick={onClick}>
      <FontAwesomeIcon icon={showPw ? faEyeSlash : faEye} />
    </button>
  </p>
)

EyeIcon.defaultProps = {
  showPw: false,
  onClick: () => {}
}

export default EyeIcon
