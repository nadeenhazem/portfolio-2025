import { useState } from 'react'
import Navbar from './Module/Components/Navbar'
import Intro from './Module/Components/Intro'
import AboutMe from './Module/Components/AboutMe'
import Experience from './Module/Components/Experience'
import MySkills from './Module/Components/MySkills'
import Resume from './Module/Components/Resume'
import ContactMe from './Module/Components/ContactMe'

function App() {
 

  return (
    <div data-theme="dark overflow-x-hidden">
    
      <Navbar/>
    <Intro/>
      <AboutMe/>
     <Experience/>
     <MySkills/>
     <Resume/>
     <ContactMe/>
    </div>
  )
}

export default App
