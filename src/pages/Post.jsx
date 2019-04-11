import React from 'react'
import styled from 'styled-components'

import Posts from 'modules/Post'

const Post = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      <Posts userId={props.match.params.userid} />
    </Content>
  )
}

export default Post
