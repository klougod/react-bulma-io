import React, { Fragment, Children } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Select = ({ icon, placeholder, className, onChange, children }) => {

  const Icon = () => (
    <span className="icon is-small is-left">
      <FontAwesomeIcon icon={icon} />
    </span>
  )

  return (
    <Fragment>
      <div className='field'>
        <div className={`control ${icon && 'has-icons-left'}`}>
          {icon && <Icon />}
          <div className={`select ${className}`} placeholder={placeholder} onChange={onChange}>
            <select>
              { Children.toArray(children).filter(c => c.type.name === "Option") }
            </select>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Select.defaultProps = {
  value: '',
  icon: null,
  placeholder: '',
  className: '',
  onChange: null
}

Select.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func
}

export default Select