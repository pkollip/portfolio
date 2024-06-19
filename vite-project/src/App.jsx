import React from 'react'
import './App.css'
import DynamicHeader from './components/DynamicHeader.jsx'
import Introduction from  './components/Introduction.jsx'
import Header from './components/Header.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {
  return (
    <div>
      <div className='fixed top-0 left-0 w-full z-10'>
        <Header />
      </div>
      <Introduction />
      <AboutMe />
    </div>
  )
}

export default App
