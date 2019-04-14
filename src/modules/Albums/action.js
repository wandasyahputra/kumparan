import { FETCH_ALBUM } from './constant'

const fetchUserAlbum = (data, validUntil, id) => {
  return ({
    type: FETCH_ALBUM,
    data: data,
    validUntil: validUntil,
    id: id
  })
}

export default fetchUserAlbum
