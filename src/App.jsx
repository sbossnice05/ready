import React from 'react'
import Navbar from './components/Navbar'
import Mainback from './components/Mainback'
import Footer from './components/Footer'

function App() {
  return (
    <div className='flex-col'>
      <Navbar/>
      <Mainback/>
      <Footer/>
      
    </div>
  )
}

export default App