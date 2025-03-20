import React,{ useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import ChatHome from './pages/ChatHome/ChatHome'

import Shorts from './pages/Shorts/Shorts'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<ChatHome/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
      </Routes>
    </>
  )
}

export default App
