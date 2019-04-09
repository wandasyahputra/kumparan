import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

describe('Test BaseButton', () => {
  it('renders without crashing', () => {
    shallow(<Button primary>Hello World</Button>)
  })
})
