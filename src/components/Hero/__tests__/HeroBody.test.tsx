import React from 'react'
import Enzyme from 'enzyme'

import HeroBody from '../HeroBody'

describe('HeroBody component test', function () {
  it('should render without crash without props', function () {
    const heroBodyMock = Enzyme.shallow(<HeroBody />)
    expect(heroBodyMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const heroBodyMockProps = {
      className: 'heroBody CLass',
    }
    const heroBodyMock = Enzyme.shallow(<HeroBody {...heroBodyMockProps} />)
    expect(heroBodyMock).toMatchSnapshot()
  })
})
