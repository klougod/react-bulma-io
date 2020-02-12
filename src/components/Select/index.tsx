import React, { Children, ReactElement } from 'react'
import PropTypes from 'prop-types'

import Option from './Option'
import Icon from './Icon'

const optionType = (<Option />).type

export const Select = ({
  icon,
  placeholder,
  className,
  onChange,
  children,
  noWrapper
}: any) =>
  noWrapper ? (
    <div
      className={`select ${className}`}
      placeholder={placeholder}
      onChange={onChange}
    >
      <select>
        {Children.toArray(children).filter(
          (c: ReactElement) => c.type === optionType
        )}
      </select>
    </div>
  ) : (
    <div className='field'>
      <div className={`control ${icon && 'has-icons-left'}`}>
        {icon && <Icon icon={icon} />}
        <div
          className={`select ${className}`}
          placeholder={placeholder}
          onChange={onChange}
        >
          <select>
            {Children.toArray(children).filter(
              (c: ReactElement) => c.type === optionType
            )}
          </select>
        </div>
      </div>
    </div>
  )

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
