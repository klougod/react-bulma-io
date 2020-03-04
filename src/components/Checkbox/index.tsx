import React, { InputHTMLAttributes, ReactNode } from 'react'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean
  onChange?: () => void
  text?: ReactNode
  wrapperClass?: string
}

export const Checkbox = ({
  text,
  checked,
  className,
  wrapperClass,
  onChange,
  ...rest
}: CheckboxProps) => (
  <div className={`checkbox ${wrapperClass}`}>
    <input
      type='checkbox'
      id='bulma-io-checkbox'
      className={className}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
    <label htmlFor='bulma-io-checkbox' onChange={onChange}>
      &nbsp;{text}
    </label>
  </div>
)

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
  text: '',
  className: '',
  wrapperClass: ''
}

export default Checkbox
