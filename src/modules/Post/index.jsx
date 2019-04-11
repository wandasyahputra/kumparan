import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import Card from 'commons/ui-kit/Card'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_POSTS_USER } from 'url/index'

import fetchUserPost from './action'


class Post extends Component {
  static propTypes = {
    postList: PropTypes.arrayOf(PropTypes.object),
    validUntil: PropTypes.number,
    id: PropTypes.number
  }

  static defaultProps = {
    postList: [],
    validUntil: 0,
    id: -1
  }


  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isError: false,
      showToast: false,
      type: '',
      msg: ''
    }
  }

  loadingState = {
    isLoading: true,
    isError: false,
    showToast: false
  }

  fetchRemoteData = async () => {
    const { userId } = this.props
    console.log('kepanggil')
    this.setState(this.defaultState)
    try {
      const res = await axios({ method: "get", url: FETCH_POSTS_USER(userId) })
      this.onDataFetched(res.data)
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        isError: true
      })
      this.toggleShowToast('Failed to get user post', 'failed')
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

  onDataFetched = data => {
    const { userId, fetchUserPost } = this.props
    fetchUserPost(data, Date.now() + 300000, userId)
    this.setState({
      isLoading: false
    })
  }

  componentDidMount() {
    const { validUntil } = this.props
    if (validUntil < Date.now()) {
      this.fetchRemoteData()
    }
  }

  render() {
    const {
      postList
    } = this.props
    const {
      showToast, type, msg
    } = this.state
    return (
      <React.Fragment>
        {postList.map((item, key) => (
          <Card
            key={key}
            data={item}
            width='800px'
            onClick={undefined}
            type='lite'
          />
        ))}
        {showToast && <Toast type={type} msg={msg} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ post }) => ({
  postList: post.data,
  validUntil: post.valiUntil
})

const mapDispatchToProps = dispatch => ({
  fetchUserPost: (data, validUntil, id) => dispatch(fetchUserPost(data, validUntil, id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Post)
