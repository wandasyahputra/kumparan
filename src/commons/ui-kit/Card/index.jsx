import React from 'react'
import PropTypes from 'prop-types'

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

const Card = (props) => {
  const {
    data,
    type,
    ...rest
  } = props

  if (type === 'userCard') {
    return (
      <Container {...rest} >
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
      </Container>
    )
  }
  return (
    <Container {...rest} >
      <div>
        <div className="title">{data.title} </div>
        <div>{data.body} </div>
      </div>
    </Container>
  )
}

Card.defaultProps = {
  className: null,
  onClick: null,
  data: {}
}

Card.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.objectOf(PropTypes.any)
}

export default Card
