import React from 'react'

import { getAvatarInnerBoxSize } from './helper'
import { Props } from './type'
import { Container } from './styled'

/**
 * TODO: handle image
 */
const Avatar: React.FC<Props> = (props) => {
  const {
    type = 'circle',
    size = 'm',
    style,
    children,
    icon,
    // src = '',
    // alt = '',
  } = props

  let combinedStyle = style || {}
  let sizeClassName = ''

  if (typeof size === 'number') {
    combinedStyle = { ...getAvatarInnerBoxSize(size), ...combinedStyle }
  } else {
    sizeClassName = `avatar-${size}`
  }

  return (
    <Container
      className={`avatar ${sizeClassName} avatar-${type}`}
      style={combinedStyle}
    >
      <span className="flex justify-center align-center">
        {children ? children : icon}
      </span>
    </Container>
  )
}

export default Avatar
