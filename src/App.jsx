import { useState, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Usercheck from './components/Usercheck'
import Banner from './components/Banner'
import Home from './components/Home'
import Login from './components/secondayComponents/Login'

import { UserAuth } from './context/AuthContext'
import Register from './components/secondayComponents/Register'
function App() {
  const [email, setEmailCheck] = useState(false)
  const {emailCheckLogin,emailCheckRegister } = UserAuth();


  return (
 <>
 {emailCheckLogin &&  <Login />}
 {emailCheckRegister && <Register />}
 <Banner />
 <Header />
<Routes>
  <Route path='/login' element={<Usercheck />} />
  <Route path='/' element={<Home />} />
</Routes>
 </>
  )
}

export default App
