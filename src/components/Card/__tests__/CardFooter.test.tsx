import React from 'react'
import Enzyme from 'enzyme'

import CardFooter from '../CardFooter'

describe('CardFooter component test', function () {
  it('should render without crash without props', function () {
    const cardFooterMock = Enzyme.shallow(<CardFooter />)
    expect(cardFooterMock).toMatchSnapshot()
  })

  it('should render without crash with props', function () {
    const cardFooterMockProps = {
      className: 'cardFooter CLass'
    }
    const cardFooterMock = Enzyme.shallow(<CardFooter {...cardFooterMockProps} />)
    expect(cardFooterMock).toMatchSnapshot()
  })
})
