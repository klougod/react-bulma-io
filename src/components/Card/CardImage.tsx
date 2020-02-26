import React, { ReactNode } from 'react'
import Figure from '../Figure'

interface CardImageProps {
  className?: string
  alt?: string
  src?: string
  children?: ReactNode
}

export const CardImage = ({
  className,
  alt,
  src,
  children
}: CardImageProps) => (
  <div className='card-image'>
    {src ? <Figure src={src} alt={alt} className={className} /> : { children }}
  </div>
)

CardImage.defaultProps = {
  className: '',
  alt: '',
  src: ''
}

export default CardImage
