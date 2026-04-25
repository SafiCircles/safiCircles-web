import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyCircles from './Pages/Dashboard/MyCircles'
import Payments from './Pages/Dashboard/Payments'
import Welcome from './Pages/Onboarding/Welcome'
import SignupStep1 from './Pages/Onboarding/SignupStep1'
import SignupStep2 from './Pages/Onboarding/SignupStep2'
import SignupStep3 from './Pages/Onboarding/SignupStep3'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup/step1" element={<SignupStep1 />} />
        <Route path="/signup/step2" element={<SignupStep2 />} />
        <Route path="/signup/step3" element={<SignupStep3 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/circles" element={<MyCircles />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  )
}

export default App
