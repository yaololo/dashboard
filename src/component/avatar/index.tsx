import React from 'react'

import { getStyles } from './helper'
import { Props } from './type'
import { Container } from './styled'

const Avatar: React.FC<Props> = (props) => {
  const { type = 'circle', size = 'm', style, children, icon } = props
  const combinedStyle = getStyles({ style, size })

  return (
    <Container
      className={`avatar avatar-${size} avatar-${type}`}
      style={combinedStyle}
    >
      <span>{children ? children : icon}</span>
    </Container>
  )
}

export default Avatar
