import React from 'react'
import Enzyme from 'enzyme'

import Checkbox from '../'

describe('Checkbox component test', function () {
  it('should render without crash without props', function () {
    const checkboxMock = Enzyme.shallow(<Checkbox />)
    expect(checkboxMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const checkboxMockProps = {
      className: 'checkboxCLass',
      name: 'checkboxName'
    }
    const checkboxMock = Enzyme.shallow(<Checkbox {...checkboxMockProps} />)
    expect(checkboxMock).toMatchSnapshot()
  })

  it('should call onchange function prop if input changes', function () {
    const checkboxMockProps = { onChange: jest.fn() }
    const checkboxMock = Enzyme.shallow(<Checkbox {...checkboxMockProps} />)
    expect(
      checkboxMock
        .find('input')
        .at(0)
        .prop('onChange')
    ).toHaveBeenCalledTimes(0)
    checkboxMock
      .find('input')
      .at(0)
      .simulate('change', { target: {} })
    expect(
      checkboxMock
        .find('input')
        .at(0)
        .prop('onChange')
    ).toHaveBeenCalledTimes(1)
  })
})
