import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import Toast from 'commons/ui-kit/Toast'
import ErrorPage from 'commons/ui-kit/ErrorPage'
import {
  FETCH_USERS_DETAIL,
  FETCH_POSTS_DETAIL,
  FETCH_POSTS_COMMENT
} from 'url/index'

import {
  fetchPostDetail,
  fetchUserDetail,
  fetchDetailComments
} from './action'

import {
  Container,
  Comment,
  Creator,
  Title,
  Body,
} from './style'


class PostDetail extends Component {
  static propTypes = {
    postDetail: PropTypes.arrayOf(PropTypes.object),
    userDetail: PropTypes.objectOf(PropTypes.any),
    validUntil: PropTypes.number,
    idPost: PropTypes.number,
    idUser: PropTypes.number
  }

  static defaultProps = {
    postDetail: [],
    userDetail: {},
    validUntil: 0,
    id: null
  }


  constructor(props) {
    super(props)
    this.state = {
      post: {
        isLoading: false,
        isError: false,
      },
      user: {
        isLoading: false,
        isError: false,
      },
      comments: {
        isLoading: false,
        isError: false,
      },
      showToast: false,
      type: '',
      msg: ''
    }
  }

  loadingState = {
    isLoading: true,
    isError: false
  }

  fetchRemoteDataPost = async () => {
    this.setState({ post:this.loadingState })
    const { postId, postList } = this.props
    const postDetail = postList.find((post)=>(
      post.id === postId
    ))
    
    if (postDetail) {
      this.onDataFetched([postDetail], 'post')
    } else {
      try {
        const res = await axios({ method: "get", url: FETCH_POSTS_DETAIL(postId) })
        this.onDataFetched(res.data, 'post')
      } catch (e) {
        console.error(e);
        this.setState({
          post: {
            isLoading: false,
            isError: true
          }
        })
        this.toggleShowToast('Failed to get user post', 'failed')
      }
    }
  }
  
  fetchRemoteDataUser = async () => {
    this.setState({ user:this.loadingState })
    const { 
      userId,
      userList
    } = this.props
    const userDetail = userList.find((user)=>(
      user.id === userId
    ))
    if (userDetail) {
      this.onDataFetched(userDetail, 'user')
    } else {
      try {
        const { userId } = this.props
        const res = await axios({ method: "get", url: FETCH_USERS_DETAIL(userId) })
        this.onDataFetched(res.data, 'user')
      } catch (e) {
        console.error(e);
        this.setState({
          user: {
            isLoading: false,
            isError: true
          }
        })
        this.toggleShowToast('Failed to get user detail', 'failed')
      }
    }
  }

  fetchRemoteDataComment = async () => {
    this.setState({ comments: this.loadingState })
    try {
      const { postId } = this.props
      const res = await axios({ method: "get", url: FETCH_POSTS_COMMENT(postId) })
      this.onDataFetched(res.data, 'comment')
    } catch (e) {
      console.error(e);
      this.setState({
        comments: {
          isLoading: false,
          isError: true
        }
      })
      this.toggleShowToast('Failed to get post comment', 'failed')
    }
  }

  toggleShowToast = (msg, type) => {
    this.setState({
      showToast: true,
      msg,
      type
    }, () => {
      setTimeout(() => {
        this.setState({
          showToast: false,
          msg: null,
          type: null,
        })
      }, 3000)
    })
  }

  onDataFetched = (data, type) => {
    const {
      postId,
      fetchPostDetail,
      fetchUserDetail,
      fetchDetailComment
    } = this.props
    if (type === 'user') {
      this.setState({
        user: {
          isLoading: false
        }
      })
      return fetchUserDetail(data)
    } else if (type === 'comment') {
      this.setState({
        comments: {
          isLoading: false
        }
      })
      return fetchDetailComment(data)
    }
    this.setState({
      post: {
        isLoading: false
      }
    })
    return fetchPostDetail(data, Date.now() + 300000, postId)
  }

  componentDidMount() {
    const { validUntil, id, postId } = this.props
    if (validUntil < Date.now() || id !== postId) {
      this.fetchRemoteDataPost()
      this.fetchRemoteDataUser()
      this.fetchRemoteDataComment()
    }
  }

  render() {
    const {
      postDetail,
      userDetail,
      comment
    } = this.props
    const {
      showToast, type, msg, user, post, comments
    } = this.state
    console.log(this.props)
    return (
      <React.Fragment>
        <Container>
          {!user.isLoading && !user.isError && (
            <Creator>Create by {userDetail.name}</Creator>
          )}
          {user.isError && (
            <ErrorPage reFetch={this.fetchRemoteDataUser} />
          )}
          {!post.isLoading && !user.isError && postDetail.map((item, key) => (
            <React.Fragment>
              <Title>{item.title}</Title>
              <Body>{item.body}</Body>
            </React.Fragment>
          ))}
          {post.isError && (
            <ErrorPage reFetch={this.fetchRemoteDataPost} />
          )}
          Comment:
          {!comments.isLoading && !comments.isError && comment.map((item,key) =>(
            <Comment>
              <div>{item.name}</div>
              <div>{item.body}</div>
            </Comment>
          ))}
          {comments.isError && (
            <ErrorPage reFetch={this.fetchRemoteDataComment} />
          )}
          {showToast && <Toast type={type} msg={msg} />}
        </Container>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ post, user, postDetail }) => ({
  postList  : post.data,
  userList  : user.data,
  id        : post.id,
  postDetail: postDetail.data,
  userDetail: postDetail.user,
  validUntil: postDetail.valiUntil,
  comment   : postDetail.comment 
})

const mapDispatchToProps = dispatch => ({
  fetchPostDetail: (data, validUntil, id) => dispatch(fetchPostDetail(data, validUntil, id)),
  fetchDetailComment: (data) => dispatch(fetchDetailComments(data)),
  fetchUserDetail: (data) => dispatch(fetchUserDetail(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)
