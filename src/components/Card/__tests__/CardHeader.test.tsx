import React from 'react'
import Enzyme from 'enzyme'

import CardHeader from '../CardHeader'

describe('CardHeader component test', function () {
  it('should render without crash without props', function () {
    const cardHeaderMock = Enzyme.shallow(<CardHeader />)
    expect(cardHeaderMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const cardHeaderMockProps = {
      className: 'cardHeader CLass'
    }
    const cardHeaderMock = Enzyme.shallow(<CardHeader {...cardHeaderMockProps} />)
    expect(cardHeaderMock).toMatchSnapshot()
  })
})
