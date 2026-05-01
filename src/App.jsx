<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyCircles from './Pages/Dashboard/MyCircles'
import Payments from './Pages/Dashboard/Payments'
import Profile from './Pages/Dashboard/Profile'
import Help from './Pages/Dashboard/Help'
import CreateCircle from './Pages/Dashboard/CreateCircle'
import CircleDetails from './Pages/Dashboard/CircleDetails'
import PublicCircles from './Pages/Dashboard/PublicCircles'
import JoinPrivateCircle from './Pages/Dashboard/JoinPrivateCircle'
import Activities from './Pages/Dashboard/Activities'
import PaymentMethodDetail from './Pages/Dashboard/PaymentMethodDetail'
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
        <Route path="/circles/create" element={<CreateCircle />} />
        <Route path="/circles/public" element={<PublicCircles />} />
        <Route path="/circles/join-private" element={<JoinPrivateCircle />} />
        <Route path="/circles/:id" element={<CircleDetails />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/payments/:type" element={<PaymentMethodDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
        <Route path="/activity" element={<Activities />} />
      </Routes>
    </>
  )
}

export default App

=======
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard/Dashboard'
import MyCircles from './Pages/Dashboard/MyCircles'
import Payments from './Pages/Dashboard/Payments'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/circles" element={<MyCircles />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  )
}

export default App
>>>>>>> c8e57c2da76ec770fc85200eb5067df3cbd76c97
