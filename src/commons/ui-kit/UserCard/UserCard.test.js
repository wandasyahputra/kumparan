import React from 'react'
import { shallow } from 'enzyme'

import ItemContainer from './index'

describe('Test ItemContainer', () => {
  it('renders without crashing', () => {
    shallow(<ItemContainer />)
  })
})
