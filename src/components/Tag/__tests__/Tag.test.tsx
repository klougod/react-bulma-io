import React from 'react'
import Enzyme from 'enzyme'

import Tag from '../'

describe('Tag component test', function () {
  it('should render without crashing', function () {
    const tagMockProps = {
      color: 'red',
      className: 'tagClass',
      text: 'random text'
    }
    const tagMock = Enzyme.shallow(<Tag {...tagMockProps} />)
    expect(tagMock).toMatchSnapshot()
  })

  it('should render span dom component with given props', function () {
    const tagMockProps = {
      color: 'red',
      className: 'tagClass',
      text: 'random text'
    }
    const tagMock = Enzyme.shallow(<Tag {...tagMockProps} />)
    const expectedComponent = (
      <span className={`tag ${tagMockProps.color} ${tagMockProps.className}`}>
        {tagMockProps.text}
      </span>
    )
    expect(tagMock.contains(expectedComponent)).toBe(true)
  })
})
