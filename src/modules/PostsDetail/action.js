import { FETCH_POST_DETAIL, FETCH_USER_DETAIL, FETCH_POST_COMMENTS } from './constant'

const fetchPostDetail = (data, validUntil, id) => {
  return ({
    type: FETCH_POST_DETAIL,
    data: data,
    validUntil: validUntil,
    id: id
  })
}

const fetchDetailComments = (data) => {
  console.log('sini', data)
  return ({
    type: FETCH_POST_COMMENTS,
    data: data
  })
}

const fetchUserDetail = (data) => {
  return ({
    type: FETCH_USER_DETAIL,
    data: data
  })
}

export {
  fetchPostDetail,
  fetchUserDetail,
  fetchDetailComments
}