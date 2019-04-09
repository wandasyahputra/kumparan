import { FETCH_USER } from './constant'


const initialState = {
  data: [],
  validUntil: 0
}

const userList = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      return {
        data: action.data,
        validUntil: action.validUntil
      }
    }
    default: {
      return state
    }
  }
}

export default userList
