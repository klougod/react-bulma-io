import React, { Children, ReactElement, ReactNode } from 'react'

import Option from './Option'
import Icon from '../Icon'

const optionType = (<Option />).type

interface SelectProps {
  icon?: any
  className?: string
  onChange?: () => void
  placeholder?: string
  children?: ReactNode
}

interface SelectWrapperProps extends SelectProps {
  noWrapper?: boolean
}

const SelectNoWrapper = ({
  className,
  placeholder,
  onChange,
  children
}: SelectProps) => (
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
)

const withWrapper = (Element: any) => ({
  icon,
  ...selectProps
}: SelectProps) => {
  return (
    <div className='field'>
      <div className={`control ${icon && 'has-icons-left'}`}>
        {icon && <Icon icon={icon} />}
        <Element {...selectProps} />
      </div>
    </div>
  )
}

export const Select = ({
  noWrapper,
  children,
  ...selectProps
}: SelectWrapperProps) => {
  const SelectComponent = noWrapper
    ? SelectNoWrapper
    : withWrapper(SelectNoWrapper)
  return <SelectComponent {...selectProps}>{children}</SelectComponent>
}

Select.defaultProps = {
  value: '',
  icon: null,
  placeholder: '',
  className: '',
  onChange: null,
  noWrapper: false
}

export default Select
