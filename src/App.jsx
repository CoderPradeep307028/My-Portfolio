import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Skill from './Components/Skill'
import About from './Components/About'
import Contact from './Components/Contact'
import Projects from './Components/Projects'

function App() {
  return (
    <>
      <Home/>
      <Skill/>
      <Projects/>
      <About/>
      <Contact/>
    </>
  )
}

export default App
