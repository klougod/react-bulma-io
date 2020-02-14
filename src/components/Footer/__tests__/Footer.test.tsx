import React from 'react'
import Enzyme from 'enzyme'

import Footer from '../'

describe('Footer component test', function () {
  it('should render without crash without props', function () {
    const footerMock = Enzyme.shallow(<Footer />)
    expect(footerMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const footerMockProps = {
      className: 'footerCLass'
    }
    const footerMock = Enzyme.shallow(<Footer {...footerMockProps} />)
    expect(footerMock).toMatchSnapshot()
  })
})
