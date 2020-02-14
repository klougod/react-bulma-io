import React from 'react'
import Enzyme from 'enzyme'

import CardImage from '../CardImage'

describe('CardImage component test', function () {
  it('should render without crash without props', function () {
    const cardImageMock = Enzyme.shallow(<CardImage />)
    expect(cardImageMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const cardImageMockProps = {
      className: 'cardImageCLass',
      src: 'imageSrcUrl',
      alt: 'image alt'
    }
    const cardImageMock = Enzyme.shallow(<CardImage {...cardImageMockProps} />)
    expect(cardImageMock).toMatchSnapshot()
  })
})
