
import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Login from './pages/Login'

import Signup from './pages/Signup'


function App() {
  const users = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div className="pages">
            <Routes>
              <Route path="/" element={users ? <Home /> : <Navigate to="/login" />} />
              <Route path="/login" element={!users ? <Login /> : <Navigate to="/" />} />
              <Route path="/signup" element={!users ? <Signup /> : <Navigate to="/" />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App