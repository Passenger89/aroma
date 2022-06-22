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
import Account from '../../Pages/Account/Account.jsx'
import Notifications from '../../Pages/Notifications/Notifications.jsx'
import Help from '../../Pages/Help/Help.jsx'
import SignUp from '../../Pages/SignUp/SignUp.jsx'

const App = () => {
  const [sidebar, setSidebar] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => setShowModal(true)
  const handleHide = () => setShowModal(false)

  return (
    <Router>
      <Header id='header' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/feed' element={<Feed />} />
        <Route path='/store' element={<Store />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/account' element={<Account />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/signup' element={<SignUp />} />
        <Route
          path='help'
          element={
            <Help
              showModal={showModal}
              handleShow={handleShow}
              handleHide={handleHide}
            />
          }
        />
      </Routes>
      <NavBar sidebar={sidebar} toggleSidebar={setSidebar} />
      <NavSideBar sidebar={sidebar} toggleSidebar={setSidebar} />
    </Router>
  )
}

export default App
