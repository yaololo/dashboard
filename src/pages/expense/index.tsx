import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { configs } from './config'
import Sidebar from '../fragment/sidebar'


const ExpenseRoute = () => {
  return (
    <>
      <Sidebar configs={configs} />
      <Routes>
        <Route path="/" element={<div>Landing page</div>} />
        <Route path="/detail" element={<div>detail</div>} />
        <Route path="/summary" element={<div>summary</div>} />
      </Routes>
    </>
  )
}

export default ExpenseRoute
