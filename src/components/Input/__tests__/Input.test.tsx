import React from 'react'
import Enzyme from 'enzyme'

import Input from '../'

describe('Input component test', function () {
  it('should render without crash without props', function () {
    const inputMock = Enzyme.shallow(<Input />)
    expect(inputMock).toMatchSnapshot()
  })
})
