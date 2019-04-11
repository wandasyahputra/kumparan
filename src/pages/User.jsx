import React from 'react'
import styled from 'styled-components'

import Users from 'modules/User'

const User = () => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      <Users />
    </Content>
  )
}

export default User
