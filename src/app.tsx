import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Page from './pages'
import GlobalStyle from './global-style'

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Page />
    </BrowserRouter>
  )
}

export default App
