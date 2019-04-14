import React from 'react'
import styled from 'styled-components'

import Users from 'modules/User'

const User = () => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  const Title = styled.div`
    font-size: 28px;
    margin: 5px 20px;
  `
  return (
    <Content>
      <Title>Users</Title>
      <Users />
    </Content>
  )
}

export default User
