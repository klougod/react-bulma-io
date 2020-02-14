import React from 'react'
import Enzyme from 'enzyme'

import Tabs from '../'
import TabLink from '../TabLink'

describe('Tabs component test', function () {
  it('should render without crash with wrapper', function () {
    const tabsMock = Enzyme.shallow(<Tabs />)
    expect(tabsMock).toMatchSnapshot()
  })

  it('should render without crash with wrapper', function () {
    const tabsMockProps = { noWrapper: true }
    const tabsMock = Enzyme.shallow(
      <Tabs {...tabsMockProps}>
        <TabLink />
        <TabLink />
        <TabLink />
      </Tabs>
    )
    expect(tabsMock).toMatchSnapshot()
  })
})
