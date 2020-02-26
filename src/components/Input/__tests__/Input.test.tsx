import 'jsdom-global/register'
import React from 'react'
import Enzyme from 'enzyme'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import Input from '../'

describe('Input component test', function () {
  it('should render without crash without props', function () {
    const inputMock = Enzyme.mount(<Input />)
    expect(inputMock).toMatchSnapshot()
  })

  it('should render correctly with props', function () {
    const inputMockProps = {
      mask: 'cpf',
      icon: faAdjust,
      type: 'password',
      label: 'inputLabel',
      isRequired: true,
      error: 'inputNotValid'
    }
    const inputMock = Enzyme.mount(<Input {...inputMockProps} />)
    expect(inputMock).toMatchSnapshot()
  })

  it('should render correctly with not existing mask', function () {
    const inputMockProps = {
      mask: 'inputMask'
    }
    const inputMock = Enzyme.mount(<Input {...inputMockProps} />)
    expect(inputMock).toMatchSnapshot()
  })

  it('should render correctly with a custom input', function () {
    const inputMockProps = {
      customInput: <input />
    }
    const inputMock = Enzyme.mount(<Input {...inputMockProps} />)
    expect(inputMock).toMatchSnapshot()
  })
})
