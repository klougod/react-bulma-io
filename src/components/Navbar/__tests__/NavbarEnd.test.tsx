import React from 'react'
import Enzyme from 'enzyme'

import NavbarEnd from '../NavbarEnd'

describe('NavbarEnd component test', function () {
  it('should render without crash without props', function () {
    const navbarEndMock = Enzyme.shallow(<NavbarEnd />)
    expect(navbarEndMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const navbarEndMockProps = {
      className: 'navbarEnd CLass',
    }
    const navbarEndMock = Enzyme.shallow(<NavbarEnd {...navbarEndMockProps} />)
    expect(navbarEndMock).toMatchSnapshot()
  })
})
