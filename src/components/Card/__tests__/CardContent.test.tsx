import React from 'react'
import Enzyme from 'enzyme'

import CardContent from '../CardContent'

describe('CardContent component test', function () {
  it('should render without crash without props', function () {
    const cardContentMock = Enzyme.shallow(<CardContent />)
    expect(cardContentMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const cardContentMockProps = {
      className: 'cardContent CLass'
    }
    const cardContentMock = Enzyme.shallow(
      <CardContent {...cardContentMockProps} />
    )
    expect(cardContentMock).toMatchSnapshot()
  })
})
