import { useState } from 'react'

import {Route,Routes} from 'react-router-dom'
import ReactDatePicker from './components/ReactDatePicker'
import WeddingMenu from './components/WeddingMenu'
import LandingPage from './components/LandingPage'
function App() {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<LandingPage/>}/> 
    <Route path='/marriage-gardens' element={<WeddingMenu/>}/>
      {/* <Route path="/date" element={<ReactDatePicker/>}/> */}
      </Routes>
      
    </>
  )
}

export default App
