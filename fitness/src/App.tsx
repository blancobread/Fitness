import './App.css'
import React from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import WorkoutSessions from './Components/WorkoutSessions'
import Gallery from './Components/Gallery'
import BMICalculator from './Components/BMICalculator'
import Footer from './Components/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Hero />
      <WorkoutSessions />
      <Gallery />
      <BMICalculator />
      <Footer />
    </Router>
  )
}

export default App
