import React, { ReactNode, OptionHTMLAttributes } from 'react'

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  text?: ReactNode
}

export const Option = ({ text, ...rest }: OptionProps) => (
  <option {...rest}>{text}</option>
)

Option.defaultProps = {
  text: '',
  value: '',
  className: '',
  disabled: false
}

export default Option
