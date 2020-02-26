import React from 'react'
import Enzyme from 'enzyme'

import Dropdown from '../'

describe('Dropdown component test', function () {
  it('should render correctly without props', function () {
    const dropdownMock = Enzyme.shallow(<Dropdown />)
    expect(dropdownMock).toMatchSnapshot()
  })

  it('should render correctly with props', function () {
    const dropdownMockProps = {
      className: 'dropdownClass',
      btnClassName: 'dropdownBtnClass',
      btnTitle: 'dropdownBtnTitle'
    }
    const dropdownMock = Enzyme.shallow(<Dropdown {...dropdownMockProps} />)
    expect(dropdownMock).toMatchSnapshot()
  })

  it('should render correctly with custom button', function () {
    const dropdownMockProps = {
      customBtn: <button />
    }
    const dropdownMock = Enzyme.shallow(<Dropdown {...dropdownMockProps} />)
    expect(dropdownMock).toMatchSnapshot()
  })
})
