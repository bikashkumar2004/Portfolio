import './App.css'
import AboutSection from './component/AboutSection'
import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'

function App() {
 

  return (
    <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
      <Navbar/>
      <HeroSection/>
      <AboutSection/>
    </main>
  )
}

export default App
