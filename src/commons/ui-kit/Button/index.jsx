import React from 'react'
import PropTypes from 'prop-types'

import IconLoading from'commons/icons/IconLoading'

import BaseButton from './style'

const Button = (props) => {
  const {
    type,
    isLoading,
    children,
    ...rest
  } = props

  switch (type) {
    case 'cancel':
      return (
        <a {...rest}>
          {children}
        </a>
      )
    default:
      return (
        <BaseButton {...rest} type={type}>
          {isLoading && (
            <div className="loading">
              <IconLoading />
            </div>
          )}
          {!isLoading && children}
        </BaseButton>
      )
  }
}

Button.defaultProps = {
  className: null,
  type: null,
  label: null,
  src: null,
  iconSize: '18px',
  closable: null,
  onClose: null,
  isLoading: false,
  handleClick: null,
  emptyData: false
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  src: PropTypes.node,
  iconSize: PropTypes.string,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  isLoading: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
  emptyData: PropTypes.bool
}

export default Button
