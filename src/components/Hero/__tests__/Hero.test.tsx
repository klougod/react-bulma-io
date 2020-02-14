import React from 'react'
import Enzyme from 'enzyme'

import Hero from '../'
import HeroHead from '../HeroHead'
import HeroBody from '../HeroBody'
import HeroFoot from '../HeroFoot'

describe('Hero component test', function () {
  it('should render without crash', function () {
    const heroMock = Enzyme.shallow(<Hero />)
    expect(heroMock).toMatchSnapshot()
  })

  it('should render without crash with correct children', function () {
    const heroMockProps = { className: 'heroClass' }
    const heroMock = Enzyme.shallow(
      <Hero {...heroMockProps}>
        <HeroHead />
        <HeroBody />
        <HeroFoot />
      </Hero>
    )
    expect(heroMock).toMatchSnapshot()
  })
})
