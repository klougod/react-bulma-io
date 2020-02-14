import React from 'react'
import PropTypes from 'prop-types'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const EyeIcon = ({ showPw, onClick }: any) => (
  <p className='control'>
    <button className='button' tabIndex={-1} onClick={onClick}>
      <FontAwesomeIcon icon={showPw ? faEyeSlash : faEye} />
    </button>
  </p>
)

EyeIcon.defaultProps = {
  showPw: null,
  onClick: () => {}
}

EyeIcon.propTypes = {
  showPw: PropTypes.any,
  onClick: PropTypes.func
}

export default EyeIcon
