import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: ReactNode
  isLoading?: Boolean
  onClick?: () => void
}

export const Button = ({ className, text, isLoading, onClick }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`button ${className} ${isLoading ? 'is-loading' : ''}`}
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
