import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Card/Features'
import Clip from '../components/clip/clip'


function Home() {
  return (
    <div className="homepage">
      <div className="content">
        <Navbar />
        <Hero />
        <Clip />
         <Features />
      </div>
     
    </div>
  )
}
export default Home
