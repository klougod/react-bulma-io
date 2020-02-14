import React from 'react'
import Enzyme from 'enzyme'

import HeroHead from '../HeroHead'

describe('HeroHead component test', function () {
  it('should render without crash without props', function () {
    const heroHeadMock = Enzyme.shallow(<HeroHead />)
    expect(heroHeadMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const heroHeadMockProps = {
      className: 'heroHead CLass',
    }
    const heroHeadMock = Enzyme.shallow(<HeroHead {...heroHeadMockProps} />)
    expect(heroHeadMock).toMatchSnapshot()
  })
})
