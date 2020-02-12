import React from 'react'
import Enzyme from 'enzyme'

import Option from '../Option'

describe('Option component test', function () {
  it('should render without crash with option', function () {
    const optionMock = Enzyme.shallow(<Option />)
    expect(optionMock).toMatchSnapshot()
  })

  it('should render with props', function () {
    const optionMockProps = {
      text: 'option text',
      value: 'option value',
      className: 'optionClass'
    }
    const optionMock = Enzyme.shallow(<Option {...optionMockProps} />)
    expect(optionMock).toMatchSnapshot()
  })

  it('should render disabled', function () {
    const optionMockProps = {
      disabled: true
    }
    const optionMock = Enzyme.shallow(<Option {...optionMockProps} />)
    expect(optionMock).toMatchSnapshot()
  })
})
