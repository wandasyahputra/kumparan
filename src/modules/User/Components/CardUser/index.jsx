import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Button from 'commons/ui-kit/Button'

import Container from './style'

/**
 * Cut long string.
 *
 * @param  {String} string    Current string.
 * @param  {Number} maxLength Max string length.
 * @return {String}           New string.
 */
const Cutter = (string, maxLength) => (
  string.length > maxLength ?
  (`${string.slice(0, maxLength - 3)}...`) : (string)
)

const CardUser = (props) => {
  const {
    data,
    openPosts,
    openAlbums,
    ...rest
  } = props

  return (
    <Container {...rest} >
      <div>
        <div>
          <div>Name </div>
          <div>Username </div>
          <div>City</div>
        </div>
        <div>
          <div> {`: ${Cutter(data.name, 20)}`}</div>
          <div> {`: ${Cutter(data.username, 20)}`}</div>
          <div> {`: ${Cutter(data.address.city, 20)}`}</div>
        </div>
      </div>
      <div>
        <div>
          <Link to={openPosts}>
            <Button width='80%'>View post</Button>
          </Link>
        </div>
        <div>
          <Link to={openAlbums}>
            <Button width='80%'>View album</Button>
          </Link>
        </div>
      </div>
    </Container>
  )
}

CardUser.defaultProps = {
  className: null,
  onClick: null,
  data: {}
}

CardUser.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any)
}

export default CardUser
