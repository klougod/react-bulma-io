import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Input = ({ value, label, icon, type, error, name, customInput, placeholder, isRequired, className, onChange }) => {
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

  return (
    <Fragment>
      <label className="label" htmlFor={name}>
        {label}
        {isRequired && <span className="has-text-danger"> *</span>}
      </label>
      <div className={`field ${type === "password" && 'has-addons has-addons-right'}`}>
        <div className={`control ${type === "password" && 'is-expanded'} ${icon && 'has-icons-left'}`}>
          {icon && <Icon />}
          {
            customInput ? customInput : <input value={value} onChange={onChange} name={name}
              className={`input ${className}`} type={type === "password" ? (!showPW ? "password" : "text") : type}
              placeholder={placeholder} />
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
  icon: faEye,
  isRequired: false,
  error: '',
  name: 'input',
  placeholder: '',
  customInput: null,
  className: '',
  onChange: null
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
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