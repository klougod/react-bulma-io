import React from 'react'
import Enzyme from 'enzyme'

import Container from '../'

describe('Container component test', function () {
  it('should render without crash without props', function () {
    const containerMock = Enzyme.shallow(<Container />)
    expect(containerMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const containerMockProps = {
      className: 'containerCLass',
    }
    const containerMock = Enzyme.shallow(<Container {...containerMockProps} />)
    expect(containerMock).toMatchSnapshot()
  })
})
