import React from 'react'
import Enzyme from 'enzyme'

import HeroFoot from '../HeroFoot'

describe('HeroFoot component test', function () {
  it('should render without crash without props', function () {
    const heroFootMock = Enzyme.shallow(<HeroFoot />)
    expect(heroFootMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const heroFootMockProps = {
      className: 'heroFoot CLass',
    }
    const heroFootMock = Enzyme.shallow(<HeroFoot {...heroFootMockProps} />)
    expect(heroFootMock).toMatchSnapshot()
  })
})
