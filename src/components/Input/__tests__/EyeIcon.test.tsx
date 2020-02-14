import React from 'react'
import Enzyme from 'enzyme'

import EyeIcon from '../EyeIcon'

describe('EyeIcon component test', function () {
  it('should render without crash without props', function () {
    const inputMock = Enzyme.shallow(<EyeIcon />)
    expect(inputMock).toMatchSnapshot()
  })
})
