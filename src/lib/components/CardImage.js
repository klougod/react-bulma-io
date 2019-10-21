import React from 'react'
import PropTypes from 'prop-types'
import Figure from './Figure'

export const CardImage = props => {

  const {
    className,
    alt,
    src
  } = props

  return (
    <div className="card-image">
      <Figure src={src} alt={alt} className={className} />
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
  src: PropTypes.string
}

export default CardImage