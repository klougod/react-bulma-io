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

  it('should call onclick function prop if dropdown is clicked', function () {
    const dropdownMockProps = { onClick: jest.fn() }
    const dropdownMock = Enzyme.shallow(<Dropdown {...dropdownMockProps} />)
    dropdownMock
      .find('div')
      .at(0)
      .simulate('click', { target: {} })
    expect(dropdownMock).toMatchSnapshot()
  })
})
