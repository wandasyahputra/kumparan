import { combineReducers } from 'redux'

import userList from 'modules/User/reducer'
import postList from 'modules/Post/reducer'

export default combineReducers({
  user: userList,
  post: postList
})
