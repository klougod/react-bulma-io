import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MaskedInput from 'react-text-mask'

export const Input = ({ value, label, icon, type, error, name, customInput, placeholder,
                        isRequired, className, onChange, mask, tip }) => {
  const [showPW, setShowPW] = useState(false)


  const Icon = () => (
    <span className="icon is-small is-left">
      <FontAwesomeIcon icon={icon} />
    </span>
  )

  const EyeIcon = () => (
    <p className="control">
      <button className="button" tabIndex="-1" onClick={() => setShowPW(!showPW)}>
        <FontAwesomeIcon icon={showPW ? faEyeSlash : faEye} />
      </button>
    </p>
  )

  const inputMask = () => {
    switch (mask) {
      case 'cellphone':
        return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
      case 'cpf':
        return [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/]
      default:
        return false
    }
  }

  return (
    <Fragment>
      <label className="label" htmlFor={name}>
        {label}
        {isRequired && <span className="has-text-danger"> *</span>}
        {tip}
      </label>
      <div className={`field ${type === "password" && 'has-addons has-addons-right'}`}>
        <div className={`control ${type === "password" && 'is-expanded'} ${icon && 'has-icons-left'}`}>
          {icon && <Icon />}
          {
            customInput ? customInput :
            <MaskedInput
              mask={inputMask()}
              name={name}
              guide={false}
              className={`input ${className}`}
              value={value}
              type={type === "password" ? (!showPW ? "password" : "text") : type}
              placeholder={placeholder}
              onChange={onChange}
            />
          }
        </div>
        {type === "password" && <EyeIcon />}
      </div>
      <p className="help is-danger">{error}</p>
    </Fragment>
  );
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
  onChange: null
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
  onChange: PropTypes.func
}

export default Input