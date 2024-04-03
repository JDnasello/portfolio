import './App.css'
import NavBar from './components/NavBar'
import Welcome from './components/Welcome'
import Projects from './components/Projects'
import Experience from './components/Experience'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Knowledge from './components/Knowledge'
import LanguageProvider from './context/LanguageContext.jsx'
import Loader from './components/Loader.jsx'

function App() {

  const [mode, setMode] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

    const changeMode = () => {
      !mode ? setMode(true) : setMode(false)
    }
  
  useEffect(() => {
    const loadingTimer = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    loadingTimer()
  }, [])
  
  return (
    <>
      
      {
        isLoading ? <Loader />
          : (
              <LanguageProvider>
                <div className={`${mode ? 'light-mode' : 'dark-mode'}`}>
                  <NavBar mode={mode} />
                  <main style={{ padding: '0 15px' }}>
                    <Welcome mode={mode} changeMode={changeMode} />
                    <Experience mode={mode} />
                    <Projects mode={mode} />
                    <AboutMe mode={mode} />
                    <Knowledge mode={mode}/>
                  </main>
                  <Footer mode={mode} />
                </div>
              </LanguageProvider>
            )
      }

    </>


  )
}

export default App
