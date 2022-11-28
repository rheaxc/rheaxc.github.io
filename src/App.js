import React from 'react'
//import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import FAQ from './components/FAQ'
import Members from './components/Members'
import Rush from './components/Rush'
import Alum from './components/Alum'

import './style/App.css'
import HomePage from './components/HomePage'

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="content-wrapper">
          <Navbar />
          <Routes>
            <Route path="/homepage" element={<HomePage />} />

            <Route path="/members" element={<Members />} />

            <Route path="/rush" element={<Rush />} />

            <Route path="/faq" element={<FAQ />} />

            <Route path="/alum" element={<Alum />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App
