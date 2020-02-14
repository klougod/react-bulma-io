import React from 'react'
import Enzyme from 'enzyme'

import NavbarBrand from '../NavbarEnd'

describe('NavbarEnd component test', function () {
  it('should render without crash without props', function () {
    const navbarEndMock = Enzyme.shallow(<NavbarBrand />)
    expect(navbarEndMock).toMatchSnapshot()
  })
})
