import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

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
    link,
    ...rest
  } = props

  return (
    <Container {...rest} >
      <Link to={link}>
        <div>
          <div className="title">{Cutter(data.title, 40)}</div>
          <div>{Cutter(data.body || '', 100)} </div>
        </div>
      </Link>
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
