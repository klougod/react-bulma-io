import React from 'react'
import Enzyme from 'enzyme'

import Column from '../'

describe('Column component test', function () {
  it('should render without crash without props', function () {
    const columnMock = Enzyme.shallow(<Column />)
    expect(columnMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const columnMockProps = {
      className: 'columnCLass',
      size: 2,
      mobile: 3,
      tablet: 4,
      desktop: 5,
    }
    const columnMock = Enzyme.shallow(<Column {...columnMockProps} />)
    expect(columnMock).toMatchSnapshot()
  })
})
