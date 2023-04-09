import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './fragment/header'
import styled from 'styled-components'
import Expense from './expense'
import { EXPENSE_BASE_PATH } from './config'

const PageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`

const Content = styled.section`
  height: 100%;
`

const Pages = () => {
  return (
    <PageContainer className="flex flex-direction-col">
      <Header />
      <Content className="flex">
        <Routes>
          <Route path={EXPENSE_BASE_PATH + '/*'} element={<Expense />} />
        </Routes>
      </Content>
    </PageContainer>
  )
}

export default Pages
