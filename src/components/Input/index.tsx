import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'

import Icon from '../Icon'
import EyeIcon from './EyeIcon'

export const Input = ({
  value,
  label,
  icon,
  type,
  error,
  name,
  customInput,
  placeholder,
  isRequired,
  className,
  onChange,
  mask,
  tip,
  disabled
}: any) => {
  const [showPw, setShowPw] = useState(false)

  const handleEyeIconClick = () => setShowPw(!showPw)

  const possibleMasks = {
    cellphone: [
      '(',
      /[1-9]/,
      /\d/,
      ')',
      ' ',
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/,
      /\d/,
      /\d/
    ],
    cpf: [
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '.',
      /\d/,
      /\d/,
      /\d/,
      '-',
      /\d/,
      /\d/
    ]
  }

  const inputMask = () => {
    const selectedMask = possibleMasks[mask]
    return selectedMask ? selectedMask : false
  }

  const verifiedInput = () => {
    if (mask) {
      return (
        <MaskedInput
          mask={inputMask()}
          name={name}
          guide={false}
          className={`input ${className}`}
          value={value}
          type={type === 'password' ? (!showPw ? 'password' : 'text') : type}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      )
    } else {
      return (
        <input
          name={name}
          className={`input ${className}`}
          value={value}
          type={type === 'password' ? (!showPw ? 'password' : 'text') : type}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
        />
      )
    }
  }

  return (
    <Fragment>
      {label && (
        <label className='label' htmlFor={name}>
          {label}
          {isRequired && <span className='has-text-danger'> *</span>}
          {tip}
        </label>
      )}
      <div
        className={`field ${type === 'password' &&
          'has-addons has-addons-right'}`}
      >
        <div
          className={`control ${type === 'password' && 'is-expanded'} ${icon &&
            'has-icons-left'}`}
        >
          {icon && <Icon />}
          {customInput ? customInput : verifiedInput()}
        </div>
        {type === 'password' && <EyeIcon showPw={showPw} onClick={handleEyeIconClick} />}
      </div>
      <p className='help is-danger'>{error}</p>
    </Fragment>
  )
}

Input.defaultProps = {
  value: '',
  label: '',
  type: 'text',
  icon: null,
  isRequired: false,
  error: '',
  name: 'input',
  mask: '',
  placeholder: '',
  customInput: null,
  className: '',
  onChange: null,
  disabled: false
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  mask: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  name: PropTypes.string,
  customInput: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool
}

export default Input
