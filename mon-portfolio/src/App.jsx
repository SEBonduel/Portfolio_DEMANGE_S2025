import './App.css'
import Background from './components/Background'
import BurgerNavbar from './components/BurgerNavbar'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Infos from './components/Infos'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <LoadingScreen />
      <BurgerNavbar />
      <Home />
      <Projects />
      <Skills />
      <Background />
      <Infos />
      <Contact />
      <Footer />  
    </>
  )
}

export default App
