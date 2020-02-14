import React from 'react'
import Enzyme from 'enzyme'

import Section from '../'

describe('Section component test', function () {
  it('should render without crash without props', function () {
    const sectionMock = Enzyme.shallow(<Section />)
    expect(sectionMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const sectionMockProps = {
      className: 'sectionCLass'
    }
    const sectionMock = Enzyme.shallow(<Section {...sectionMockProps} />)
    expect(sectionMock).toMatchSnapshot()
  })
})
