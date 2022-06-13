import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Header/Header.jsx'
import NavBar from '../NavBar/NavBar.jsx'
import NavSideBar from '../NavSideBar/NavSideBar.jsx'
import Home from '../../Pages/Home/Home.jsx'
import Gallery from '../../Pages/Gallery/Gallery.jsx'
import Feed from '../../Pages/Feed/Feed.jsx'
import Store from '../../Pages/Store/Store.jsx'
import Settings from '../../Pages/Settings/Settings.jsx'
import '../../scss/main.scss'

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <Router>
      <Header id='header' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/store' element={<Store />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <NavBar sidebar={sidebar} toggleSidebar={setSidebar} />
      <NavSideBar sidebar={sidebar} toggleSidebar={setSidebar} />
    </Router>
  )
}

export default App
