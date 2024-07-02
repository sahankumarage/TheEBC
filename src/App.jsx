import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Layout/Nav-Bar/NavBar'
import ThemeProvider from './theme/index'

function App() {

  return (
    <>
    <ThemeProvider>
    <NavBar />
    </ThemeProvider>
    </>
  )
}

export default App
