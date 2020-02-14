import React from 'react'
import Enzyme from 'enzyme'

import Figure from '../'

describe('Figure component test', function () {
  it('should render without crash without props', function () {
    const figureMock = Enzyme.shallow(<Figure />)
    expect(figureMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const figureMockProps = {
      className: 'figureCLass',
      src: 'imageSrcUrl',
      alt: 'image alt'
    }
    const figureMock = Enzyme.shallow(<Figure {...figureMockProps} />)
    expect(figureMock).toMatchSnapshot()
  })
})
