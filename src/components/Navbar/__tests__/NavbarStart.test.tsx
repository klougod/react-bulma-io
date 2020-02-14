import React from 'react'
import Enzyme from 'enzyme'

import NavbarStart from '../NavbarStart'

describe('NavbarStart component test', function () {
  it('should render without crash without props', function () {
    const navbarStartMock = Enzyme.shallow(<NavbarStart />)
    expect(navbarStartMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const navbarStartMockProps = {
      className: 'navbarStart CLass'
    }
    const navbarStartMock = Enzyme.shallow(
      <NavbarStart {...navbarStartMockProps} />
    )
    expect(navbarStartMock).toMatchSnapshot()
  })
})
