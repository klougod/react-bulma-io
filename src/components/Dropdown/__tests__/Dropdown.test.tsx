import React from 'react'
import Enzyme from 'enzyme'

import Dropdown from '../'

describe('Dropdown component test', function () {
  it('should render without crash without props', function () {
    const dropdownMock = Enzyme.shallow(<Dropdown />)
    expect(dropdownMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const dropdownMockProps = {
      className: 'dropdownClass',
      btnClassName: 'dropdownBtnClass',
      btnTitle: 'dropdownBtnTitle'
    }
    const dropdownMock = Enzyme.shallow(<Dropdown {...dropdownMockProps} />)
    expect(dropdownMock).toMatchSnapshot()
  })
})
