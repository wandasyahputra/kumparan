import React from 'react'
import styled from 'styled-components'

import Albums from 'modules/Albums'

const Album = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      <Albums userId={props.match.params.userid} />
    </Content>
  )
}

export default Album
