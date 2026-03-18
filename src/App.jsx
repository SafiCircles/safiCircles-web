import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Auth/Login'
import SignUp from './Pages/Auth/SignUp'
import OTP from './Pages/Auth/OTP'
import Onboarding from './Pages/Onboarding/Onboarding'
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify" element={<OTP />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
