import React from 'react'
import Enzyme from 'enzyme'

import Button from '../'

describe('Button component test', function () {
  it('should render without crash with wrapper', function () {
    const buttonMock = Enzyme.shallow(<Button />)
    expect(buttonMock).toMatchSnapshot()
  })

  it('should render without loading', function () {
    const buttonMockProps = {
      text: 'button text',
      className: 'buttonClass',
      onClick: () => {},
      isLoading: false
    }
    const buttonMock = Enzyme.shallow(<Button {...buttonMockProps} />)
    expect(buttonMock).toMatchSnapshot()
  })

  it('should render loading', function () {
    const buttonMockProps = {
      text: 'button text',
      className: 'buttonClass',
      onClick: () => {},
      isLoading: true
    }
    const buttonMock = Enzyme.shallow(<Button {...buttonMockProps} />)
    expect(buttonMock).toMatchSnapshot()
  })
})
