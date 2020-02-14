import React from 'react'
import Enzyme from 'enzyme'

import Card from '../'
import CardHeader from '../CardHeader'
import CardContent from '../CardContent'
import CardImage from '../CardImage'
import CardFooter from '../CardFooter'

describe('Card component test', function () {
  it('should render without crash', function () {
    const cardMock = Enzyme.shallow(<Card />)
    expect(cardMock).toMatchSnapshot()
  })

  it('should render without crash with correct children', function () {
    const cardMockProps = { className: 'cardClass' }
    const cardMock = Enzyme.shallow(
      <Card {...cardMockProps}>
        <CardHeader />
        <CardContent />
        <CardImage />
        <CardFooter />
      </Card>
    )
    expect(cardMock).toMatchSnapshot()
  })
})
