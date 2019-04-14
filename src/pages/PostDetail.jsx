import React from 'react'
import styled from 'styled-components'

import PostsDetail from 'modules/PostsDetail'

const PostDetail = (props) => {
  const Content = styled.div`
    color: ${props => props.theme.primaryTextColor};
  `
  return (
    <Content>
      <PostsDetail userId={props.match.params.userid} postId={props.match.params.postid} />
    </Content>
  )
}

export default PostDetail
