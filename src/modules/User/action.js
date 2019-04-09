import { FETCH_USER } from './constant'

const fetchUserList = (data, validUntil) => {
  return ({
    type: FETCH_USER,
    data: data,
    validUntil: validUntil
  })
}

export default fetchUserList
