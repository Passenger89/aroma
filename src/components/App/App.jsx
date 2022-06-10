import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Home from '../../Pages/Home/Home.jsx'
import '../../scss/main.scss'
import NavBar from '../NavBar/NavBar.jsx'
import NavSideBar from '../NavSideBar/NavSideBar.jsx'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <NavBar pageName='Aroma' />
      <NavSideBar />
    </Router>
  )
}

export default App
