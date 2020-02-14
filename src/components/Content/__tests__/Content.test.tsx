import React from 'react'
import Enzyme from 'enzyme'

import Content from '../'

describe('Content component test', function () {
  it('should render without crash without props', function () {
    const contentMock = Enzyme.shallow(<Content />)
    expect(contentMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const contentMockProps = {
      className: 'contentCLass',
    }
    const contentMock = Enzyme.shallow(<Content {...contentMockProps} />)
    expect(contentMock).toMatchSnapshot()
  })
})
