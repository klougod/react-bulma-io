import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Option from './Option';

const optionType = (<Option />).type

export const Select = ({ icon, placeholder, className, onChange, children, noWrapper }) => {

  const Icon = () => (
    <span className="icon is-small is-left">
      <FontAwesomeIcon icon={icon} />
    </span>
  )

  return (
    noWrapper ?
    <div className={`select ${className}`} placeholder={placeholder} onChange={onChange}>
      <select>
        { Children.toArray(children).filter(c => c.type === optionType) }
      </select>
    </div> :
    <div className='field'>
      <div className={`control ${icon && 'has-icons-left'}`}>
        {icon && <Icon />}
        <div className={`select ${className}`} placeholder={placeholder} onChange={onChange}>
          <select>
            { Children.toArray(children).filter(c => c.type === optionType) }
          </select>
        </div>
      </div>
    </div>
  );
}

Select.defaultProps = {
  value: '',
  icon: null,
  placeholder: '',
  className: '',
  onChange: null,
  noWrapper: false
}

Select.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
  className: PropTypes.string,
  onChange: PropTypes.func,
  noWrapper: PropTypes.bool
}

export default Select