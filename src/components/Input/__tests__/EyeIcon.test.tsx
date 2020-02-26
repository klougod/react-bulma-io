import React from 'react'
import Enzyme from 'enzyme'

import EyeIcon from '../EyeIcon'

describe('EyeIcon component test', function () {
  it('should render without crash without props', function () {
    const eyeIconMock = Enzyme.shallow(<EyeIcon />)
    expect(eyeIconMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const eyeIconMockProps = {
      showPw: true
    }
    const eyeIconMock = Enzyme.shallow(<EyeIcon {...eyeIconMockProps} />)
    expect(eyeIconMock).toMatchSnapshot()
  })
})
