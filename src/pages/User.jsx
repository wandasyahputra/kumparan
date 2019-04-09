import React from 'react'
import styled from 'styled-components'

import User from 'modules/User'

const Home = () => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      <User />
    </Content>
  )
}

export default Home
