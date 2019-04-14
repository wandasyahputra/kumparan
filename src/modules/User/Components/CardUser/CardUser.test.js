import React from 'react'
import { shallow } from 'enzyme'

import CardUser from './index'

describe('Test CardUser', () => {
  it('renders without crashing', () => {
    shallow(<CardUser />)
  })
})
