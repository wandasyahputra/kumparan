import React from 'react'
import styled from 'styled-components'

import Posts from 'modules/Post'

const Post = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  const Title = styled.div`
    font-size: 28px;
    margin: 5px 20px;
  `
  return (
    <Content>
      <Title>Posts</Title>
      <Posts userId={props.match.params.userid} />
    </Content>
  )
}

export default Post
