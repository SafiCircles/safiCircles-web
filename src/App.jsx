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
