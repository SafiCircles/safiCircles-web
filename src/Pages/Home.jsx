import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Card/Features'


function Home() {
  return (
    <div className="homepage">
      <div className="content">
        <Navbar />
        <Hero />
         <Features />
      </div>
     
    </div>
  )
}
export default Home
