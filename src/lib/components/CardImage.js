import React from 'react'
import PropTypes from 'prop-types'
import Figure from './Figure'

export const CardImage = props => {

  const {
    className,
    alt,
    src,
    children
  } = props

  return (
    <div className="card-image">
      {
        src ? <Figure src={src} alt={alt} className={className} /> : {children}
      }
    </div>
  )
}

CardImage.defaultProps = {
  className: '',
  alt: '',
  src: ''
}

CardImage.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.node
}

export default CardImage