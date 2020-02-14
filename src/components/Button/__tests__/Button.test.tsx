import React from 'react'
import Enzyme from 'enzyme'

import Button from '../'

describe('Button component test', function () {
  it('should render without crash with wrapper', function () {
    const buttonMock = Enzyme.shallow(<Button />)
    expect(buttonMock).toMatchSnapshot()
  })

  it('should render not in loading state', function () {
    const buttonMockProps = {
      text: 'button text',
      className: 'buttonClass',
      isLoading: false
    }
    const buttonMock = Enzyme.shallow(<Button {...buttonMockProps} />)
    expect(buttonMock).toMatchSnapshot()
  })

  it('should render in loading state', function () {
    const buttonMockProps = {
      text: 'button text',
      className: 'buttonClass',
      isLoading: true
    }
    const buttonMock = Enzyme.shallow(<Button {...buttonMockProps} />)
    // the line below was added just to remove a branch in coverage, jest coverage
    // was complanning about defaultProps onClick function never being called
    buttonMock
      .find('button')
      .at(0)
      .simulate('click', { target: {} })
    expect(buttonMock).toMatchSnapshot()
  })

  it('should call onclick function prop if button is clicked', function () {
    const buttonMockProps = { onClick: jest.fn() }
    const buttonMock = Enzyme.shallow(<Button {...buttonMockProps} />)
    expect(
      buttonMock
        .find('button')
        .at(0)
        .prop('onClick')
    ).toHaveBeenCalledTimes(0)
    buttonMock
      .find('button')
      .at(0)
      .simulate('click', { target: {} })
    expect(
      buttonMock
        .find('button')
        .at(0)
        .prop('onClick')
    ).toHaveBeenCalledTimes(1)
  })
})
