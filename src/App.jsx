import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Features from './components/Card/Features'
import HowSafiCirclesWorks from './components/HowItWorks/HowSafiCirclesWorks'
import ProSection from './components/ProSection/ProSection'
import GetStarted from './components/GetStarted/GetStarted' 
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<ProSection />} />
        <Route path="/how-it-works" element={<HowSafiCirclesWorks />} />
        <Route path="/contacts" element={<GetStarted />} />
      </Routes>
    </>
  )
}

export default App
