import React from 'react'
import PropTypes from 'prop-types'

import Container from './style'

/**
 * Cut long string.
 *
 * @param  {String} string Current string.
 * @return {String}       New string.
 */
const Cutter = (string) => (
  string.length > 20 ?
  (`${string.slice(0, 17)}...`) : (string)
)

const UserCard = (props) => {
  const {
    name,
    username,
    city,
    ...rest
  } = props
  return (
    <Container {...rest} >
      <div>
        <div>Name </div>
        <div>Username </div>
        <div>City</div>
      </div>
      <div>
        <div> {`: ${Cutter(name)}`}</div>
        <div> {`: ${Cutter(username)}`}</div>
        <div> {`: ${Cutter(city)}`}</div>
      </div>
    </Container>
  )
}

UserCard.defaultProps = {
  className: null,
  onClick: null,
  name: '',
  username: '',
  city: ''
}

UserCard.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string,
  username: PropTypes.string,
  city: PropTypes.string
}

export default UserCard
