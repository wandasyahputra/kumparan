import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import axios from 'axios'

import UserCard from 'commons/ui-kit/UserCard'
import Toast from 'commons/ui-kit/Toast'
import { FETCH_USERS } from 'url/index'

import fetchUserList from './action'


class User extends Component {
  static propTypes = {
    userList: PropTypes.arrayOf(PropTypes.object),
    validUntil: PropTypes.number
  }

  static defaultProps = {
    userList: [],
    validUntil: 0
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
    console.log('kepanggil')
    this.setState(this.defaultState)
    try {
      const res = await axios({ method: "get", url: FETCH_USERS })
      this.onDataFetched(res.data)
    } catch (e) {
      console.error(e);
      this.setState({
        isLoading: false,
        isError: true
      })
      this.toggleShowToast('Failed to get user data', 'failed')
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
    this.props.fetchUser(data, Date.now() + 300000)
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
      userList
    } = this.props
    const {
      showToast, type, msg
    } = this.state
    return (
      <React.Fragment>
        {userList.map((item, key) => (
          <UserCard key={key} name={item.name} username={item.username} city={item.address.city} />
        ))}
        {showToast && <Toast type={type} msg={msg} />}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  userList: user.data,
  validUntil: user.valiUntil
})

const mapDispatchToProps = dispatch => ({
  fetchUser: (data, validUntil) => dispatch(fetchUserList(data, validUntil))
})
export default connect(mapStateToProps, mapDispatchToProps)(User)
