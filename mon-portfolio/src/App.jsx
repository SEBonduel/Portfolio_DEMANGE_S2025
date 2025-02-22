import './App.css'
import BurgerNavbar from './components/BurgerNavbar'
import Home from './components/Home'
import LoadingScreen from './components/LoadingScreen'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <LoadingScreen />
      <BurgerNavbar />
      <Home />
      <Projects />
      <Skills />
    </>
  )
}

export default App
