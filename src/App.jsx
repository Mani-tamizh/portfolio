import './App.css'
import React from 'react'
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home'
import About from './components/about/About'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Resume from './components/resume/Resume'
import BacktoTop from './components/backtotop/BacktoTop';
function App() {

  return (
    <>
      <Sidebar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portfolio/>
      </main>
      <BacktoTop/>
    </>
  )
}

export default App
