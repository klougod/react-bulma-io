import React, { InputHTMLAttributes, ReactNode, useState, FC } from 'react'
import MaskedInput from 'react-text-mask'

import Icon from '../Icon'
import EyeIcon from './EyeIcon'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: string
  tip?: String
  isRequired?: Boolean
  icon?: any
  label?: String
  error?: String
  customInput?: ReactNode
}

export const withMask = (input: any, mask: string) => () => {
  const possibleMasks = {
    cellphone: ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
    cpf: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
  }

  const inputMask = () => {
    const selectedMask = possibleMasks[mask]
    return selectedMask ? selectedMask : false
  }

  const inputProps = {
    ...input.props,
    guide: false,
    mask: inputMask()
  }

  return <MaskedInput { ...inputProps } />
}

export const Input: FC<InputProps> = ({ label, icon, error, customInput, isRequired, mask, tip, className, type, ...rest }: InputProps) => {
  const fieldClass = `field ${type === 'password' ? 'has-addons has-addons-right' : ''}`
  const controlClass = `control ${type === 'password' ? 'is-expanded' : ''} ${icon ? 'has-icons-left' : ''}`

  const [showPw, setShowPw] = useState(false)
  const handleEyeIconClick = () => setShowPw(!showPw)

  const inputProps = {
    className: `input ${className}`,
    type: type === 'password' ? (!showPw ? 'password' : 'text') : type,
    ...rest
  }

  const verifiedInput = () => {
    const VerifiedInput = () => <input { ...inputProps } />
    const VerifiedMaskedInput = withMask(VerifiedInput, mask as string)
    return mask ? <VerifiedMaskedInput /> : <VerifiedInput />
  }

  return (
    <>
      {label && (
        <label className='label'>
          {label}
          {isRequired && <span className='has-text-danger'> *</span>}
          {tip}
        </label>
      )}
      <div className={fieldClass}>
        <div className={controlClass}>
          {icon && <Icon icon={icon} />}
          {customInput ? customInput : verifiedInput()}
        </div>
        {type === 'password' && <EyeIcon showPw={showPw} onClick={handleEyeIconClick} />}
      </div>
      {error && <p className='help is-danger'>{error}</p>}
    </>
  )
}

Input.defaultProps = {
  value: '',
  label: '',
  type: 'text',
  isRequired: false,
  error: '',
  mask: '',
  placeholder: '',
  className: '',
  onChange: () => {},
  disabled: false
}

export default Input
