import React from 'react'
import styled from 'styled-components'

import Albums from 'modules/Albums'

const Album = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  const Title = styled.div`
    font-size: 28px;
    margin: 5px 20px;
  `
  return (
    <Content>
      <Title>Album</Title>
      <Albums userId={props.match.params.userid} />
    </Content>
  )
}

export default Album
