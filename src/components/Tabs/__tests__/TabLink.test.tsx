import React from 'react'
import Enzyme from 'enzyme'

import TabLink from '../TabLink'

describe('TabLink component test', function () {
  it('should render without crash with tabLink', function () {
    const tabLinkMock = Enzyme.shallow(<TabLink />)
    expect(tabLinkMock).toMatchSnapshot()
  })

  it('should render with props', function () {
    const tabLinkMockProps = {
      id: 'tabLinkId',
      text: 'tabLink text',
      className: 'tabLinkClass'
    }
    const tabLinkMock = Enzyme.shallow(<TabLink {...tabLinkMockProps} />)
    expect(tabLinkMock).toMatchSnapshot()
  })

  it('should render active', function () {
    const tabLinkMockProps = { isActive: true }
    const tabLinkMock = Enzyme.shallow(<TabLink {...tabLinkMockProps} />)
    // the line below was added just to remove a branch in coverage, jest coverage
    // was complanning about defaultProps changeTab function never being called
    tabLinkMock.find('a').at(0).simulate('click', {target: {}})
    expect(tabLinkMock).toMatchSnapshot()
  })

  it('should call onchange function prop if tab is clicked', function () {
    const tabLinkMockProps = { changeTab: jest.fn() }
    const tabLinkMock = Enzyme.shallow(<TabLink {...tabLinkMockProps} />)
    expect(tabLinkMock.find('a').at(0).prop('onClick')).toHaveBeenCalledTimes(0)
    tabLinkMock.find('a').at(0).simulate('click', {target: {}})
    expect(tabLinkMock.find('a').at(0).prop('onClick')).toHaveBeenCalledTimes(1)
  })
})
