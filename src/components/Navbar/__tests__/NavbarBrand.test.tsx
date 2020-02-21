import React from 'react'
import Enzyme from 'enzyme'

import NavbarBrand from '../NavbarBrand'

describe('NavbarEnd component test', function () {
  it('should render without crash without props', function () {
    const navbarEndMock = Enzyme.shallow(<NavbarBrand />)
    expect(navbarEndMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const navbarBrandMockProps = {
      className: 'navbarBrand CLass',
      menuRef: 'navbarBrand'
    }
    const navbarBrandMock = Enzyme.shallow(
      <NavbarBrand {...navbarBrandMockProps} />
    )
    expect(navbarBrandMock).toMatchSnapshot()
  })

  it('should render without crash with children', function () {
    const navbarEndMock = Enzyme.shallow(
      <NavbarBrand>
        <h1>NavbarBrand</h1>
      </NavbarBrand>
    )
    expect(navbarEndMock).toMatchSnapshot()
  })
})
