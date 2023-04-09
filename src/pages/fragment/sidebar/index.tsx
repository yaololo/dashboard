import React, { useEffect, useState } from 'react'

import { Container, ItemContainer } from './style'
import { SideMenuConfig } from './config'
import { getActiveTab } from './helper'

const Sidebar: React.FC<{ configs: SideMenuConfig }> = ({ configs }) => {
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    const tabKey = getActiveTab(configs, window.location.pathname)
    setActiveTab(tabKey)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="flex flex-direction-col">
      {configs.map((item) => {
        return (
          <React.Fragment key={item.key}>
            <ItemContainer
              to={item.link}
              className={activeTab === item.key ? 'active' : ''}
              onClick={() => setActiveTab(item.key)}
            >
              <div>{item.text}</div>
            </ItemContainer>
          </React.Fragment>
        )
      })}
    </Container>
  )
}

export default Sidebar
