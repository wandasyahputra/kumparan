import { combineReducers } from 'redux'

import userList from 'modules/User/reducer'

export default combineReducers({
  user: userList
})
