import React from 'react'
import Enzyme from 'enzyme'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'

import Icon from '../'

describe('Icon component test', function () {
  it('should render without crash with icon', function () {
    const iconMock = Enzyme.shallow(<Icon icon={faAdjust} />)
    expect(iconMock).toMatchSnapshot()
  })
})
