import { FETCH_POST_DETAIL, FETCH_USER_DETAIL, FETCH_POST_COMMENTS } from './constant'


const initialState = {
  data: [],
  user: {},
  comment: [],
  validUntil: 0,
  id: -1
}

const postDetail = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAIL: {
      return {
        ...state,
        data: action.data,
        validUntil: action.validUntil,
        id: action.id
      }
    }
    case FETCH_POST_COMMENTS: {
      console.log('sini', action)
      return {
        ...state,
        comment: action.data
      }
    }
    case FETCH_USER_DETAIL: {
      return {
        ...state,
        user: action.data
      }
    }
    default: {
      return state
    }
  }
}

export default postDetail
