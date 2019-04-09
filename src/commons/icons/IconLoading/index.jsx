import React from 'react'
import PropTypes from 'prop-types'

const IconLoading = (props) => {
  const {
    className,
    color
  } = props

  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path fill={color} d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(138.454 25 25)">
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}

IconLoading.defaultProps = {
  className: null,
  color: '#D0D0D0'
}

IconLoading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

export default IconLoading
