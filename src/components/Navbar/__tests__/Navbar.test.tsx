import React from 'react'
import Enzyme from 'enzyme'

import Navbar from '../'
import NavbarBrand from '../NavbarBrand'
import NavbarStart from '../NavbarStart'
import NavbarEnd from '../NavbarEnd'

describe('Navbar component test', function () {
  it('should render without crash', function () {
    const heroMock = Enzyme.shallow(<Navbar />)
    expect(heroMock).toMatchSnapshot()
  })

  it('should render without crash with correct children', function () {
    const heroMockProps = {
      className: 'heroClass',
      menuClass: 'heroMenuClass'
    }
    const heroMock = Enzyme.shallow(
      <Navbar {...heroMockProps}>
        <NavbarBrand />
        <NavbarStart />
        <NavbarEnd />
      </Navbar>
    )
    expect(heroMock).toMatchSnapshot()
  })
})
