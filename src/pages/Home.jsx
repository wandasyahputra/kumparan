import React from 'react'
import styled from 'styled-components'

const Home = () => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      Hello World
    </Content>
  )
}

export default Home
