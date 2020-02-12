import React from 'react'
import PropTypes from 'prop-types'

export const Figure = ({ className, alt, src }: any) => (
  <figure className={`image ${className}`}>
    <img src={src} alt={alt} />
  </figure>
)

Figure.defaultProps = {
  className: '',
  src: 'https://bulma.io/images/placeholders/128x128.png',
  alt: 'image does not have alt'
}

Figure.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Figure
