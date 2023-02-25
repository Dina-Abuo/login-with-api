import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './component/header/Header'
import Login from './pages/login/Login'
import Profile from './pages/profile/Profile'
import axios from 'axios'
const token = "ODJlODc3NTctZjk5Mi00NDZjLTgxOTUtZjY3NDk0YjVkOGFh";
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` };
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

