import React from 'react'
import { Container, InnerHeader } from './styles'

import Avatar from '~/component/avatar'
import ProfileIcon from '~/asset/svg/people.svg'

const Header = () => {
  return (
    <Container className="flex">
      <InnerHeader className="flex align-center justify-space-between">
        <div>logo</div>
        <div className="flex align-center">
          <Avatar style={{ marginRight: '5px' }} icon={<ProfileIcon />} />
          <span>login</span>
        </div>
      </InnerHeader>
    </Container>
  )
}

export default Header
