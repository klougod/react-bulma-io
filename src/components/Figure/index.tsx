import React, { ImgHTMLAttributes } from 'react'

export const Figure = ({ className, ...rest}: ImgHTMLAttributes<HTMLImageElement>) => (
  <figure className={`image ${className}`}>
    <img {...rest} />
  </figure>
)

Figure.defaultProps = {
  className: '',
  src: 'https://bulma.io/images/placeholders/128x128.png',
  alt: 'image does not have alt'
}

export default Figure
