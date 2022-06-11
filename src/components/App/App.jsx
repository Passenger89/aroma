import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
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
  const toggleSidebar = () => setSidebar(!sidebar)
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
      <NavBar
        pageName='Aroma'
        sidebar={sidebar}
        toggleSidebar={toggleSidebar}
      />
      <NavSideBar
        sidebar={sidebar}
        setSidebar={setSidebar}
        toggleSidebar={toggleSidebar}
      />
    </Router>
  )
}

export default App
