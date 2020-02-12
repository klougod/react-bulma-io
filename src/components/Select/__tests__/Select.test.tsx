import React from 'react'
import Enzyme from 'enzyme'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import Select from '../'
import Option from '../Option'

describe('Select component test', function () {
  it('should render without crash with wrapper', function () {
    const selectMock = Enzyme.shallow(<Select />)
    expect(selectMock).toMatchSnapshot()
  })

  it('should render without crash with wrapper', function () {
    const selectMockProps = { noWrapper: true }
    const selectMock = Enzyme.shallow(
      <Select {...selectMockProps}>
        <Option />
        <Option />
        <Option />
      </Select>
    )
    expect(selectMock).toMatchSnapshot()
  })

  it('should render without crash with children elements', function () {
    const selectMockProps = { icon: faAdjust }
    const selectMock = Enzyme.shallow(
      <Select {...selectMockProps}>
        <Option />
        <Option />
        <Option />
      </Select>
    )
    expect(selectMock).toMatchSnapshot()
  })
})
