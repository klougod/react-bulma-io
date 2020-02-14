import React from 'react'
import Enzyme from 'enzyme'

import Columns from '../'

describe('Columns component test', function () {
  it('should render without crash without props', function () {
    const columnsMock = Enzyme.shallow(<Columns />)
    expect(columnsMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const columnsMockProps = {
      className: 'columnsCLass',
    }
    const columnsMock = Enzyme.shallow(<Columns {...columnsMockProps} />)
    expect(columnsMock).toMatchSnapshot()
  })
})
