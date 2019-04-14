import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import Card from 'commons/ui-kit/Card'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_ALBUMS_USER } from 'url/index'

import fetchUserAlbum from './action'


class Albums extends Component {
  static propTypes = {
    albumList: PropTypes.arrayOf(PropTypes.object),
    validUntil: PropTypes.number,
    id: PropTypes.number
  }

  static defaultProps = {
    albumList: [],
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
    this.setState(this.defaultState)
    try {
      const res = await axios({ method: "get", url: FETCH_ALBUMS_USER(userId) })
      this.onDataFetched(res.data)
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        isError: true
      })
      this.toggleShowToast('Failed to get user Albums', 'failed')
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
    const { userId, fetchUserAlbum } = this.props
    fetchUserAlbum(data, Date.now() + 300000, userId)
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
      albumList
    } = this.props
    const {
      showToast, type, msg
    } = this.state
    return (
      <React.Fragment>
        {albumList.map((item, key) => (
          <Card
            key={key}
            data={item}
            width='250px'
            onClick={undefined}
            type='albums'
          />
        ))}
        {showToast && <Toast type={type} msg={msg} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ album }) => ({
  albumList: album.data,
  validUntil: album.valiUntil
})

const mapDispatchToProps = dispatch => ({
  fetchUserAlbum: (data, validUntil, id) => dispatch(fetchUserAlbum(data, validUntil, id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Albums)
