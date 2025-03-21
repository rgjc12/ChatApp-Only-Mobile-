import React,{ useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom';
import ChatHome from './pages/ChatHome/ChatHome'
import Shorts from './pages/Shorts/Shorts'
import Chats from './pages/Chats/Chats'
import Discover from './pages/Discover/Discover'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<ChatHome/>}/>
        <Route path='/shorts' element={<Shorts/>}/>
        <Route path='/chat' element={<Chats/>}/>
        <Route path='/aboutus' element={<Discover/>}/>
      </Routes>
    </>
  )
}

export default App
