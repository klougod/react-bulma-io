import React from 'react'
import Enzyme from 'enzyme'

import Box from '../'

describe('Box component test', function () {
  it('should render without crash with props', function () {
    const boxMockProps = {
      className: 'boxClass'
    }
    const boxMock = Enzyme.shallow(<Box {...boxMockProps} />)
    expect(boxMock).toMatchSnapshot()
  })
})
