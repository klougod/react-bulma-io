import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: ReactNode
  isLoading?: boolean
  onClick?: () => void
}

export const Button = ({
  className,
  text,
  isLoading,
  onClick,
  ...rest
}: ButtonProps) => (
  <button
    onClick={onClick}
    className={`button ${className} ${isLoading ? 'is-loading' : ''}`}
    {...rest}
  >
    {text}
  </button>
)

Button.defaultProps = {
  isLoading: false,
  onClick: () => {},
  text: '',
  className: ''
}

export default Button
