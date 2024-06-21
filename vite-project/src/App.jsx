import React from 'react'
import './App.css'
import DynamicHeader from './components/DynamicHeader.jsx'
import Introduction from  './components/Introduction.jsx'
import Header from './components/Header.jsx'
import ParticleBkgd from './components/ParticleBkgd.jsx'

function App() {
  return (
    <div className='relative min-h-screen'>
      <ParticleBkgd />
      <div className="relative z-10">
        <div className='fixed top-0 left-0 w-full z-10'>
          <Header />
        </div>
        <Introduction />
      </div>
    </div>
  )
}

export default App
