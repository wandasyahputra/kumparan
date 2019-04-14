import { FETCH_POST } from './constant'

const fetchUserPost = (data, validUntil, id) => {
  return ({
    type: FETCH_POST,
    data: data,
    validUntil: validUntil,
    id: id
  })
}

export default fetchUserPost
