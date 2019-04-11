import { FETCH_POST } from './constant'


const initialState = {
  data: [],
  validUntil: 0,
  id: -1
}

const userPost = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST: {
      return {
        data: action.data,
        validUntil: action.validUntil,
        id: action.id
      }
    }
    default: {
      return state
    }
  }
}

export default userPost
