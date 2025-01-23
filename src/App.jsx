import React, { useRef } from 'react';
import './App.css'
import AboutSection from './component/AboutSection'
import Education from './component/Education'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import Projects from './component/projects/Projects'
import ContactSection from './component/contact/ContactSection'
import ScrollToTop from './component/helper/ScrollToTop'
import Skills from './component/Skills'

function App() {
  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactmeRef = useRef(null);

  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar aboutRef={aboutRef} educationRef={educationRef} skillsRef={skillsRef} projectsRef={projectsRef} contactmeRef={contactmeRef}/>
      <HeroSection contactmeRef={contactmeRef}/>
      <AboutSection aboutRef={aboutRef}/>
      <Education educationRef={educationRef}/>
      <Skills skillsRef={skillsRef}/>
      <Projects projectsRef={projectsRef}/>
      <ContactSection contactmeRef={contactmeRef}/>
      <ScrollToTop />
      
    </main>
  )
}

export default App
