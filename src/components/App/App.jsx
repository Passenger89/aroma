import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import Home from '../../Pages/Home/Home.jsx'
import '../../scss/main.scss'
import NavBar from '../NavBar/NavBar.jsx'
import NavSideBar from '../NavSideBar/NavSideBar.jsx'

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => setSidebar(!sidebar)
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <NavBar
        pageName='Aroma'
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
      />
      <NavSideBar sidebar={sidebar} toggleSidebar={toggleSidebar} />
    </Router>
  )
}

export default App
