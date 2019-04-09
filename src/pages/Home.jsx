import React from 'react'
import styled from 'styled-components'

import Button from 'commons/ui-kit/Button'

const Home = () => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      Hello World
      <Button primary>Hehe</Button>
    </Content>
  )
}

export default Home
